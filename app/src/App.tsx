import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { ScrollToTop } from "./components/ui/ScrolltoTop";

function App() {
  
  return (
    <div className="bg-background h-full w-full">
      <ScrollToTop/>
      <Navbar />
      <hr className="border-gray-300" />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
