import { Outlet } from 'react-router-dom'

// type Props = {
//     children: React.ReactNode
// }

export default function AppLayout() {
  return (
    <div>
    <Outlet />
    </div>
  )
}