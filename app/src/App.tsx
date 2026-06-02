import { Link, matchRoutes, Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./components/navbar";

// import {Outlet} from "@tanstack/react-router"
function App() {
  const url = useLocation();

  return (
    <div className="bg-background h-screen w-screen">
      <Navbar />
      <hr className="border-gray-300" />
      {url.pathname == "/" && (
        <Link
          to="/home"
          className="flex w-fit mx-auto items-center justify-center mt-[35vh]"
        >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">Let's get started!</button>
        </Link>
      )}
      <Outlet />
    </div>
  );
}

export default App;
