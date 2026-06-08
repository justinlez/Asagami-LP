import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@/index.css";
import App from "@/App.tsx";
import "@fontsource/space-grotesk";
import "@fontsource/noto-sans-jp";
import { Home } from "@/components/Home";
import { NotFound } from "@/components/NotFound";
import { AboutAsagami } from "@/components/AboutAsagami";
import { Features } from "@/components/Features";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "aboutasagami",
        element: <AboutAsagami />,
      },
      {
        path: "features",
        element: <Features />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
