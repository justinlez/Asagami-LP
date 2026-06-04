import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Navbar } from "@/components/ui/navbar";

function App() {
  const url = useLocation();
  if (url.pathname =='/'){
    Navigate({to:'/home'})
  }
  return (
    <div className="bg-background h-full w-full">
      <Navbar />
      <hr className="border-gray-300" />
      <Outlet />
    </div>
  );
}

export default App;
