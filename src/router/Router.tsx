import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import Layout from "../pages/layout/layout";
import LoginPage from "../pages/login/LoginPage";
import CoursesPage from "../pages/courses/CoursesPage";
import PricingPage from "../pages/pricing/PricingPage";
import RegisterPage from "../pages/register/RegisterPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;