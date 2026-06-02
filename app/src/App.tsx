import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./components/navbar";

// import {Outlet} from "@tanstack/react-router"
function App() {
  const url = useLocation();
  if (url.pathname =='/'){
    Navigate({to:'/home'})
  }
  return (
    <div className="bg-background h-screen w-screen">
      <Navbar />
      <hr className="border-gray-300" />
      <Outlet />
    </div>
  );
}

export default App;
