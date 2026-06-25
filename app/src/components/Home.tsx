import { HomeMain } from "@/components/homeContent/homeMain"
import { GlobalOutreach } from "@/components/homeContent/globalOutreach";
import { UseCase } from "./homeContent/useCase";

export function Home() {
  

  return (
    <div>
      <HomeMain/>
      <br />
      <UseCase/>
      <div className="mt-[3%] border-t-2 border-gray-200">
        <GlobalOutreach/>
      </div>
    </div>
  );
}
