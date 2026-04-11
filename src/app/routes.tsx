import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "*", Component: () => <div className="p-12 text-center text-2xl font-bold">404 Not Found</div> },
    ],
  },
]);
