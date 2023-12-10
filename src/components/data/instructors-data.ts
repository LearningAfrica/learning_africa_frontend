import woman1 from '@/assets/woman-1.jpeg';
import woman2 from '@/assets/woman-2.jpeg';
import woman3 from '@/assets/woman-3.jpeg';
import man1 from '@/assets/man-1.jpeg';
import man2 from '@/assets/man-2.jpeg';
import man3 from '@/assets/man-3.jpeg';

type Instructor = {
	id: number;
	first_name: string;
	last_name: string;
	qualification: string;
	profile_image: string;
	skills: string;
	about: string;
};
export const instructorsData: Instructor[] = [
	{
		id: 1,
		first_name: 'Mary Juma',
		last_name: 'Doe',
		profile_image: woman1,
		qualification: 'BSc. Computer Science',
		about: 'Proficient in HTML, CSS, JavaScript, Python, C++, and Java. I have been teaching for 5 years.',
		skills: 'HTML, CSS, JavaScript'
	},
	{
		id: 2,
		first_name: 'Jane',
		last_name: 'Smith',
		profile_image: man1,
		qualification: 'BSc. Computer Science',
		skills: 'HTML, CSS, JavaScript, Python',
		about: 'Proficient in HTML, CSS, JavaScript, Python, C++, and Java. I have been teaching for 5 years.'
	},
	{
		id: 3,
		first_name: 'Jane',
		last_name: 'Smith',
		profile_image: woman2,
		qualification: 'BSc. Computer Science',
		skills: 'HTML, CSS, JavaScript, Python',
		about: 'Proficient in HTML, CSS, JavaScript, Python, C++, and Java. I have been teaching for 5 years.'
	},
	{
		id: 4,
		first_name: 'Jane',
		last_name: 'Smith',
		profile_image: man2,
		qualification: 'BSc. Computer Science',
		skills: 'HTML, CSS, JavaScript, Python',
		about: 'Proficient in HTML, CSS, JavaScript, Python, C++, and Java. I have been teaching for 5 years.'
	},
	{
		id: 5,
		first_name: 'Jane',
		last_name: 'Smith',
		profile_image:woman3,
		qualification: 'BSc. Computer Science',
		skills: 'HTML, CSS, JavaScript, Python',
		about: 'Proficient in HTML, CSS, JavaScript, Python, C++, and Java. I have been teaching for 5 years.'
	},
	{
		id: 6,
		first_name: 'Jane',
		last_name: 'Smith',
		profile_image: man3,
		qualification: 'BSc. Computer Science',
		skills: 'HTML, CSS, JavaScript, Python',
		about: 'Proficient in HTML, CSS, JavaScript, Python, C++, and Java. I have been teaching for 5 years.'
	}
];
