import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@/index.css";
import App from "@/App.tsx";
import "@fontsource/space-grotesk";
import "@fontsource/noto-sans-jp";
import { Home } from "@/components/Home";
import { NotFound } from "@/components/NotFound";
import { Mission } from "@/components/aboutUs/Mission";
import { Features } from "@/components/Features";
import { Team } from "@/components/aboutUs/Team";

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
        children: [
          { path: "mission", element: <Mission /> },
          { path: "team", element: <Team /> },
        ],
      },
      {
        path: "features/:featureName",
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
