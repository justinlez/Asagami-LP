import { HomeMain } from "@/components/homeContent/homeMain"
import { GlobalOutreach } from "@/components/homeContent/globalOutreach";
import { Footer } from "@/components/ui/footer";

export function Home() {
  

  return (
    <div>
      <HomeMain/>
      <div className="min-h-[12vh]">
         <br />
      </div>
      <div>
        <GlobalOutreach/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
