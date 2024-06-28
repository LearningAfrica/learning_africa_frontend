import {AxiosError} from "axios";
import type { SingleCourseResponse } from "~/types/courses";
import type {PaginationData} from "~/types/response";

type Data = SingleCourseResponse// Pick<PaginationData, "courses">["courses"]["data"][number];

export const useSingleCourse = () => {
	const {$privateAxios} = useNuxtApp();
	const singleCourseData = useState("single-course-data", () => ({}) as Data);
	const fetch_error = useState<AxiosError | Error | null>(
		"single-course-fetch-error",
		() => null
	);
	const has_error = useState<boolean>("single-course-loading", () => false);
	const is_loading = useState<boolean>("single-course-loading", () => false);
	const cache = useState<{[key: string]: Data}>("single-course-cache", () => ({}));

	const fetchData = async (
		course_id: number,
		bypass_cache: boolean = false
	) => {
		const cacheKey = `data=${course_id}`;
		// console.log({ options, page, limit });

		is_loading.value = true;
		try {
			if (!bypass_cache) {
				// Check if the data is already in the cache
				if (cache.value[cacheKey]) {
					console.log("Returning cached data for", cacheKey);
					singleCourseData.value = cache.value[cacheKey];

					return cache.value[cacheKey];
				}
			}

			// Fetch data from the API
			const response = await $privateAxios.get(`/api/courses/${course_id}`, {
				
			});

			const data = response.data as Data;

			// Store the fetched data in the cache
			cache.value[cacheKey] = data;

			// Set the categories state with the fetched data
			singleCourseData.value = data;

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

	const refreshData = async (course_id:number) => {
	
		await fetchData(course_id,true);
	};

	return {
		data: singleCourseData,
		is_loading: is_loading,
		has_error: has_error,
		fetch_error: fetch_error,
		fetchData,
		refreshData
	};
};
