import React from "react";
import Navbar from "../ui/Navbar";
import { Outlet } from "react-router";
import Footer from "../ui/Footer";
import ScrollToTop from "../ScrollSection/ScrollToTop";
import FloatingActions from "../ScrollSection/FloatingActions";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTop />
      <FloatingActions />
    </div>
  );
};

export default RootLayout;
