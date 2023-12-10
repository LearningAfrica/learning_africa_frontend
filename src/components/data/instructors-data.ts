import woman1 from '@/assets/woman-1.jpeg';
import woman2 from '@/assets/woman-2.jpeg';
import woman3 from '@/assets/woman-3.jpeg';
import man1 from '@/assets/man-1.jpeg';
import man2 from '@/assets/man-2.jpeg';
import man3 from '@/assets/man-3.jpeg';
import thumb from '@/assets/1.png';

type Instructor = {
	id: number;
	first_name: string;
	last_name: string;
	qualification: string;
	profile_image: string;
	skills: string;
	about: string;
	courses?: Course[];
};
type Course = {
	id: number;
	name: string;
	description: string;
	image: string;
	enrolled: number;
	lessons: number;
	ratings: number;
	price: number;
	thumbnail: string
};
const about = `
	Software developers work in a variety of industries, including software publishers, finance companies, 
	insurance carriers, and computer systems design organizations. You might work in health care, engineering, 
	manufacturing, or another work environment. 
	
	Many software developers work in a traditional office, while others leverage opportunities to work for 
	an agency or work remotely.
	Having a good sense of what you want from your job can help you successfully navigate your path forward.`;
const courses = [
	{
		id: 1,
		name: 'Html introduction',
		description:
			'HTML is the standard markup language for Web pages. With HTML you can create your own Website.',
		image: 'https://www.example.com/html/pic_htmltree.gif',
		enrolled: 200,
		lessons: 20,
		ratings: 3.6,
		price: 0,
		thumbnail: thumb
	},
	{
		id: 2,
		name: 'CSS for Beginners',
		description:
			'Learn how to style websites using Cascading Style Sheets (CSS), the language used to add design to web pages.',
		image: 'https://www.example.com/css/pic_cssbasics.gif',
		enrolled: 30,
		lessons: 2,
		ratings: 4.0,
		price: 0,
		thumbnail: thumb
	},
	{
		id: 3,
		name: 'JavaScript Fundamentals',
		description:
			'Learn the basics of JavaScript, the most popular programming language in web development.',
		image: 'https://example.com/js_basics.png',
		enrolled: 20,
		lessons: 24,
		ratings: 3.5,
		price: 0,
		thumbnail: thumb
	},
	{
		id: 5,
		name: 'Node.js Essentials',
		description:
			'Dive into Node.js and understand how to build scalable backend applications.',
		image: 'https://example.com/nodejs_essentials.png',
		enrolled: 0,
		lessons: 0,
		ratings: 0,
		price: 0,
		thumbnail: thumb
	},
	{
		id: 6,
		name: 'Express.js for Beginners',
		description:
			'Learn how to create web applications easily with Express.js, a popular web framework.',
		image: 'https://example.com/expressjs_beginners.png',
		enrolled: 0,
		lessons: 0,
		ratings: 0,
		price: 0,
		thumbnail: thumb
	}
];
export const instructorsData: Instructor[] = [
	{
		id: 1,
		first_name: 'Mary',
		last_name: 'Jane',
		profile_image: woman1,
		qualification: 'BSc. Computer Science',
		about,
		skills: 'HTML, CSS, JavaScript',
		courses
	},
	{
		id: 2,
		first_name: 'Mike',
		last_name: 'Roy',
		profile_image: man1,
		qualification: 'BSc. Computer Science',
		skills: 'HTML, CSS, JavaScript, Python',
		about,
		courses
	},
	{
		id: 3,
		first_name: 'Sylvia',
		last_name: 'Kim',
		profile_image: woman2,
		qualification: 'BSc. Computer Science',
		skills: 'HTML, CSS, JavaScript, Python',
		about,
		courses
	},
	{
		id: 4,
		first_name: 'Ronny',
		last_name: 'Magina',
		profile_image: man2,
		qualification: 'BSc. Computer Science',
		skills: 'HTML, CSS, JavaScript, Python',
		about,
		courses
	},
	{
		id: 5,
		first_name: 'Daisy',
		last_name: 'Hammond',
		profile_image: woman3,
		qualification: 'BSc. Computer Science',
		skills: 'HTML, CSS, JavaScript, Python',
		about,
		courses
	},
	{
		id: 6,
		first_name: 'Paul',
		last_name: 'Smith',
		profile_image: man3,
		qualification: 'BSc. Computer Science',
		skills: 'HTML, CSS, JavaScript, Python',
		about,
		courses
	}
];
