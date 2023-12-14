import { motion } from 'framer-motion';
import AdminStatsSection from './components/AdminStatsSection';
import AdminStatsCardSection from './components/AdminStatsCardSection';
// import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
// const data = [
// 	{ name: 'Jan', uv: 200, pv: 2400, amt: 2400 },
// 	{ name: 'Feb', uv: 300, pv: 2400, amt: 2400 },
// 	{ name: 'March', uv: 200, pv: 2400, amt: 2400 },
// 	{ name: 'April', uv: 340, pv: 2400, amt: 2400 },
// 	{ name: 'May', uv: 500, pv: 2400, amt: 2400 },
// 	{ name: 'June', uv: 600, pv: 2400, amt: 2400 },
// 	{ name: 'July', uv: 200, pv: 2400, amt: 2400 },
// 	{ name: 'Aug', uv: 200, pv: 2400, amt: 2400 },
// 	{ name: 'Sep', uv: 230, pv: 2400, amt: 2400 },
// 	{ name: 'Oct', uv: 100, pv: 2400, amt: 2400 },
// 	{ name: 'Nov', uv: 900, pv: 2400, amt: 2400 },
// 	{ name: 'Dec', uv: 200, pv: 2400, amt: 2400 }
// ];

export default function AdminDashboard() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, transition: { duration: 0.3 } }}
			exit={{ opacity: 0, transition: { duration: 0.3 } }}
			className="bg-light p-4 flex flex-col gap-4"
		>
			<AdminStatsCardSection />
			<AdminStatsSection />
		</motion.div>
	);
}
