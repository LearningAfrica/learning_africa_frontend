import {AxiosError} from "axios";
import type {PaginationData} from "~/types/response";

type Data = Pick<PaginationData, "courses">["courses"];
type Meta = Pick<Pick<Data, "meta">["meta"], "limit" | "page">;

export const useCourses = () => {
	const {$privateAxios} = useNuxtApp();
	const categories = useState("courses-data", () => ({}) as Data);
	const fetch_error = useState<AxiosError | Error | null>(
		"courses-fetch-error",
		() => null
	);
	const has_error = useState<boolean>("courses-loading", () => false);
	const is_loading = useState<boolean>("courses-loading", () => false);
	const cache = useState<{[key: string]: Data}>("course-cache", () => ({}));
	const page_options = useState<Meta & {total_items?: number}>(
		"current-course-page-options",
		() => ({limit: 20, page: 1}) as Meta
	);

	const fetchData = async (
		options: Meta = page_options.value,
		bypass_cache: boolean = false
	) => {
		const limit =
			"limit" in options ? options["limit"] : page_options.value.limit;
		const page =
			"page" in options ? options["page"] : page_options.value.page;

		const cacheKey = `page=${page}&limit=${limit}`;
		// console.log({ options, page, limit });

		is_loading.value = true;
		try {
			if (!bypass_cache) {
				// Check if the data is already in the cache
				if (cache.value[cacheKey]) {
					console.log("Returning cached data for", cacheKey);
					categories.value = cache.value[cacheKey];
					page_options.value.total_items =
						categories.value.meta.totalDocs;
					return cache.value[cacheKey];
				}
			}

			// Fetch data from the API
			const response = await $privateAxios.get("/api/courses/", {
				params: options
			});

			const data = response.data as Data;

			// Store the fetched data in the cache
			cache.value[cacheKey] = data;

			// Set the categories state with the fetched data
			categories.value = data;

			return data;
		} catch (err: any) {
			if (err instanceof AxiosError) {
				fetch_error.value = err;
			} else {
				fetch_error.value = err;
			}
			has_error.value = true;
		} finally {
			is_loading.value = false;
		}
	};

	watch(page_options, async (newData, _) => {
		await refreshData(newData);
	});

	const refreshData = async (options: Meta) => {
		// Update the current page options state
		const limit =
			"limit" in options ? options["limit"] : page_options.value.limit;
		const page =
			"page" in options ? options["page"] : page_options.value.page;

		// Fetch new data with updated options
		await fetchData({page, limit});
	};

	return {
		data: categories,
		is_loading: is_loading,
		has_error: has_error,
		fetch_error: fetch_error,
		page_defaults: page_options,
		fetchData,
		refreshData
	};
};
