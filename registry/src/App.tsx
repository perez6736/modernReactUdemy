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
        loader: async ({ request }) => {
          const { searchParams } = new URL(request.url);
          const term = searchParams.get("term");

          if (!term) {
            throw new Error("Search term must be provided.");
          }

          const res = await fetch(
            `https://registry.npmjs.org/-/v1/search?text=${term}`
          );
          const data = await res.json();
          return data.objects;
        },
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
