import { createBrowserRouter } from "react-router";
import RootLayout from "../Components/layout/RootLayout";
import Home from "../Components/ui/Home";
import ServicePage from "../Pages/ServicePage";
import AboutPage from "../Pages/AboutPage";
import BlogListing from "../Pages/Blog/BlogListing";
import BlogDetails from "../Pages/Blog/BlogDetails"; // Blog details page-ta import koro
import ContactPage from "../Pages/ContactPage/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/services",
        Component: ServicePage,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "/blog",
        element: <BlogListing />,
      },
      {
        // Dynamic route
        path: "/blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        Component: ContactPage,
      },
    ],
  },
]);
