import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import DeatailsPage from "./pages/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/packages/:name",
        element: <DeatailsPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
