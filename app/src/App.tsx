import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/ui/navbar";

function App() {
  
  return (
    <div className="bg-background h-full w-full">
      <Navbar />
      <hr className="border-gray-300" />
      <Outlet />
    </div>
  );
}

export default App;
