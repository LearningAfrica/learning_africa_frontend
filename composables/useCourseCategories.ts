import {AxiosError} from "axios";
import type {PaginationData} from "~/types/response";

type Data = Pick<PaginationData, "categories">["categories"];
type Meta = Pick<Pick<Data, "meta">["meta"], "limit" | "page">;

export const useCourseCategories = () => {
	const {$API, $privateAxios} = useNuxtApp();
	const categories = useState("course-categories-data", () => ({}) as Data);
	const fetchError = useState<AxiosError | Error | null>(
		"course-categories-fetch-error",
		() => null
	);
	const hasError = useState<boolean>(
		"categories-courses-loading",
		() => false
	);
	const isLoading = useState<boolean>(
		"categories-courses-loading",
		() => false
	);
	const cache = useState<{[key: string]: Data}>(
		"course-categories-cache",
		() => ({})
	);
	const currentPageOptions = useState<Meta & {total_items?: number}>(
		"current-page-options",
		() => ({limit: 20, page: 1}) as Meta
	);

	const fetchData = async (options: Meta = currentPageOptions.value) => {
		const cacheKey = `page=${options.page}&limit=${options.limit}`;
		isLoading.value = true;
		try {
			// Check if the data is already in the cache
			if (cache.value[cacheKey]) {
				console.log("Returning cached data for", cacheKey);
				categories.value = cache.value[cacheKey];
				currentPageOptions.value.total_items =
					categories.value.meta.totalDocs;
				return cache.value[cacheKey];
			}

			// Fetch data from the API
			const response = await $privateAxios.get("/api/categories/", {
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
				fetchError.value = err;
			} else {
				fetchError.value = err;
			}
			hasError.value = true;
		} finally {
			isLoading.value = false;
		}
	};

	watch(currentPageOptions, async (newData, _) => {
		await refreshData(newData);
	});

	const refreshData = async (options: Meta) => {
		// Update the current page options state
		currentPageOptions.value = {...currentPageOptions, ...options};

		// Fetch new data with updated options
		await fetchData(options);
	};

	return {
		categories: categories,
		is_loading: isLoading,
		has_error: hasError,
		fetch_error: fetchError,
		page_defaults: currentPageOptions,
		fetchData,
		refreshData
	};
};
