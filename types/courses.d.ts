export type CoursesResponse = {
	id: number;
	instructor: {
		first_name: string;
		last_name: string;
	};
	title: string;
	slug: string;
	overview: string;
	course_image_url: string;
	created: Date;
	category: {
		id: number;
		title: string;
	};
	tags: string[];
};
