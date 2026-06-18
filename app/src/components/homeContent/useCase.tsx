import AboutUsBg2 from "@/assets/AboutUsBg2.jpg";
import { useState } from "react";
import { USECASES } from "@/components/constants/constants";
import { NavButton } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function UseCase() {
  const [useCase, setUseCase] = useState(0);

  const canClickLeft = useCase > 0;
  const canClickRight = useCase < USECASES.length - 1;
  return (
    <div
      className="flex w-full"
      style={{
        backgroundImage: `url(${AboutUsBg2})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="flex w-[90vw] mx-auto min-h-screen items-center justify-center">
        <div className="flex flex-col relative items-center justify-center w-2/5">
          <NavButton
            className="absolute left-0 px-0 h-8 disabled:text-gray-400 disabled:hover:bg-transparent"
            disabled={!canClickLeft}
            onClick={() => setUseCase(useCase - 1)}
          >
            <ChevronLeft />
          </NavButton>
          <img src={USECASES[useCase].img} alt="" className="inline w-[80%]" />
          <NavButton
            className="absolute right-0 px-0 h-8 disabled:text-gray-400 disabled:hover:bg-transparent"
            disabled={!canClickRight}
            onClick={() => setUseCase(useCase + 1)}
          >
            <ChevronRight />
          </NavButton>
        </div>
        <div className="flex flex-col w-1/2 items-center">
          <h1 className="h-[15vh] w-5/6">Use Case</h1>
          <p className="w-5/6">
            Designed for a wide range of users, Asagami helps people teach and
            learn effectively, regardless of their industry, profession, or
            status. Its intuitive design makes knowledge sharing simple and
            efficient.
          </p>
        </div>
      </div>
    </div>
  );
}
