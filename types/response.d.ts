import type {CategoryResponse} from "./categories";
import type {CoursesResponse} from "./courses";

export type PaginatedResponse<T = unknown> = {
	data: T[];
	meta: {
		totalDocs: number;
		totalPages: number;
		page: number;
		limit: number;
		hasNextPage: boolean;
		hasPrevPage: boolean;
		nextPage: null | number;
		prevPage: null | number;
	};
};

export type PaginationData = {
	categories: PaginatedResponse<CategoryResponse>;
	courses: PaginatedResponse<CoursesResponse>;
};
