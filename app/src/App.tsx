import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

function App() {
  
  return (
    <div className="bg-background h-full w-full">
      <Navbar />
      <hr className="border-gray-300" />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
