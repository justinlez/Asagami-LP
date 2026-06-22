import AboutUsBg2 from "@/assets/AboutUsBg2.jpg";
import { useState } from "react";
import { USECASES } from "@/components/constants/constants";
import { NavButton } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function UseCase() {
  const [useCaseNumber, setUseCaseNumber] = useState(0);

  const canClickLeft = useCaseNumber > 0;
  const canClickRight = useCaseNumber < USECASES.length - 1;
  return (
    <div
      className="flex w-full justify-center"
      style={{
        backgroundImage: `url(${AboutUsBg2})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col w-[90vw]  min-h-screen items-center justify-center">
        <div className="flex flex-col w-3/4 text-center py-[3vh] gap-y-3">
          <h1 className="font-notoserif font-medium">
            Value for Every Organisation
          </h1>
          <p className="mx-auto w-5/6 text-[#8F8888]">
            Already adopted by banks, venture capital firms, manufacturers and
            schools, Asagami AI solves common challenges such as limited
            resources in creating learning content and checking if learners have
            truly absorbed the material.
            <i className=""> Click through to find out more!</i>
          </p>
        </div>
        <div
          className="flex flex-col min-h-[70vh] w-3/4 relative justify-center rounded-3xl text-white  "
          style={{
            backgroundImage: `url(${USECASES[useCaseNumber].img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <NavButton
            className="absolute left-[3%] rounded-full p-1 h-10 disabled:text-gray-400 disabled:hover:bg-transparent"
            disabled={!canClickLeft}
            onClick={() => setUseCaseNumber(useCaseNumber - 1)}
          >
            <ChevronLeft className="size-6 2xl:size-8"/>
          </NavButton>
          <div className="flex flex-col px-[12%] h-full ">
            <h1
              className="flex justify-center items-center min-h-[25%] 2xl:py-10 font-notoserif font-bold  text-center uppercase"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}
            >
              {USECASES[useCaseNumber].label}
            </h1>
            {Array.isArray(USECASES[useCaseNumber].content) ? (
              <div className="flex flex-col gap-8 pt-3">
                {USECASES[useCaseNumber].content.map((item, index) => (
                  <div className="" key={item.subLabel}>
                    <h3>{item.subLabel}</h3>
                    <ul className="ps-8 list-disc">
                      {item.subDesc.map(point => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <div> kiv </div>
            )}
          </div>
          <NavButton
            className="absolute right-[3%] rounded-full p-1 h-10 disabled:text-gray-400 disabled:hover:bg-transparent"
            disabled={!canClickRight}
            onClick={() => setUseCaseNumber(useCaseNumber + 1)}
          >
            <ChevronRight className="size-6 2xl:size-8"/>
          </NavButton>
        </div>
      </div>
    </div>
  );
}
