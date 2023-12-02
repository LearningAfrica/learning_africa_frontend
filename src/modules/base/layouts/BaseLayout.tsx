import { Outlet } from "react-router-dom";
import BaseLayoutWrapper from "../components/BaseLayoutWrapper";

export default function BaseLayout() {
  return (
	<div>
		<BaseLayoutWrapper>
		<Outlet />
		</BaseLayoutWrapper>
	</div>
  )
}
