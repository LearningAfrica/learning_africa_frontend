import { motion } from 'framer-motion';
import { lazy } from 'react';
const Header = lazy(() => import('../components/Header'));
const HomeBanner = lazy(() => import('../components/HomeBanner'));
const WhyUs = lazy(() => import('../components/WhyUs'));
const HomeCourses = lazy(() => import('../components/HomeCourses'));
const HomeFooter = lazy(() => import('../components/HomeFooter'));
const HomeAnalytics = lazy(() => import('../components/HomeAnalytics'));

export default function Homepage() {
	return (
		<motion.div className="flex flex-col">
			<Header />
			<HomeBanner />
			<WhyUs />
			<HomeCourses />
			<HomeAnalytics />
			<HomeFooter />
		</motion.div>
	);
}
