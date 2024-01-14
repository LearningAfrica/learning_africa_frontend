import Header from './components/Header';
import { motion } from 'framer-motion';
import HomeBanner from './components/HomeBanner';
import WhyUs from './components/WhyUs';
import HomeCourses from './components/HomeCourses';
import HomeFooter from './components/HomeFooter';
import HomeAnalytics from './components/HomeAnalytics';

export default function Homepage() {
	return (
		<motion.div className="flex flex-col">
			<Header />
			<HomeBanner />
			<WhyUs />
			<HomeCourses />
			<HomeAnalytics />
			<HomeFooter/>
		</motion.div>
	);
}
