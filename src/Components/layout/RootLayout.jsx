import React from "react";
import Navbar from "../ui/Navbar";
import { Outlet } from "react-router";
import Footer from "../ui/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
