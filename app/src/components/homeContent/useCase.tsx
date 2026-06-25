import AboutUsBg2 from "@/assets/AboutUsBg2.jpg";
import { useState } from "react";
import { USECASES } from "@/components/constants/constants";
import { NavButton } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function UseCase() {
  const [useCaseNumber, setUseCaseNumber] = useState(0);
  const [animationState, setAnimationState] = useState<
    "flipX" | "flipXOut" | "slideFromRight" | "slideFromLeft" | "flipY" | null
  >(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const useCaseCount = USECASES.length;
  const activeIndex = ((useCaseNumber % useCaseCount) + useCaseCount) % useCaseCount;
  const activeUseCase = USECASES[activeIndex];

  const animationClass =
    animationState === "flipX"
      ? "animate-rotateX"
      : animationState === "flipXOut"
        ? "animate-rotateOutX"
        : animationState === "slideFromRight"
          ? "animate-slideInRight"
          : animationState === "slideFromLeft"
            ? "animate-slideInLeft"
            : animationState === "flipY"
              ? "animate-rotateY"
              : "";

  const backgroundCards = USECASES.map((useCase, index) => {
    const rawOffset = index - activeIndex;
    const wrappedOffset =
      Math.abs(rawOffset) <= useCaseCount / 2
        ? rawOffset
        : rawOffset > 0
          ? rawOffset - useCaseCount
          : rawOffset + useCaseCount;
    const direction = wrappedOffset === 0 ? 0 : wrappedOffset > 0 ? 1 : -1;
    const distance = Math.abs(wrappedOffset);

    return {
      useCase,
      distance,
      style: {
        transform: `translateX(${direction * (80 + (distance - 1) * 34)}px) translateY(${distance * 12}px) scale(${Math.max(0.82, 1 - distance * 0.08)}) rotate(${direction * (distance === 1 ? 5 : 12)}deg)`,
        opacity: Math.max(0.18, 0.5 - distance * 0.12),
        zIndex: 20 - distance,
        filter: distance === 0 ? "none" : "blur(0.3px)",
      } as const,
    };
  });

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
        <div className="flex flex-col md:w-3/4 text-center py-[3vh] gap-y-3">
          <h1 className="font-notoserif font-medium">
            Value for Every Organisation
          </h1>
          <p className="mx-auto w-5/6 text-[#8F8888]">
            Adopted by banks, venture capital firms, manufacturers and schools,
            Asagami AI solves common challenges such as limited resources in
            creating learning content and checking if learners have truly
            absorbed the material.
            <i className=""> Click through to find out more!</i>
          </p>
        </div>
        <div className="relative flex min-h-[70vh] w-full items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            {backgroundCards.map(
              ({ useCase, distance, style }) =>
                useCase != activeUseCase && (
                  <div
                    key={`${useCase.label}-${distance}`}
                    className="absolute h-full min-h-[70vh] w-5/6 rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.14)] transition-all duration-700 ease-out md:w-3/4"
                    style={{
                      backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.12), rgba(0,0,0,0.7)), url(${useCase.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      ...style,
                    }}
                  />
                ),
            )}
          </div>

          <div
            key={useCaseNumber}
            className={`relative z-30 flex min-h-[75vh] w-5/6 flex-col justify-center overflow-hidden rounded-3xl py-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.25)] md:w-3/4 ${animationClass}`}
            style={{
              backgroundImage: `linear-gradient(to bottom, transparent, rgba(0,0,0,0.92)), url(${activeUseCase.img})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <NavButton
              className="absolute left-[3%] z-40 h-10 rounded-full p-2 2xl:p-1 disabled:text-gray-400 disabled:hover:bg-transparent"
              onClick={() => {
                setUseCaseNumber((prev) => (prev - 1 + useCaseCount) % useCaseCount);
                isFlipped && setIsFlipped(false);
                setAnimationState("slideFromRight");
              }}
            >
              <ChevronLeft className="size-6 2xl:size-8" />
            </NavButton>
            <div
              className="flex flex-col flex-1 justify-center px-[12%]"
              onClick={() => {
                setAnimationState(
                  animationState == "flipX" ? "flipXOut" : "flipX",
                );
                setIsFlipped((prev) => !prev);
              }}
            >
              {isFlipped ? (
                <div className="h-full">
                  <h2 className="flex min-h-16 items-center justify-center text-center font-notoserif font-bold uppercase">
                    {activeUseCase.label}
                  </h2>
                  {Array.isArray(activeUseCase.content) ? (
                    <div className="flex flex-col gap-8 pt-4">
                      {activeUseCase.content.map((item) => (
                        <div key={item.subLabel}>
                          <h3>{item.subLabel}</h3>
                          <ul
                            className="ps-8 list-disc"
                            style={{
                              textShadow: "0px 4px 4px rgba(0, 0, 0, 1)",
                            }}
                          >
                            {item.subDesc.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>{activeUseCase.content}</div>
                  )}
                </div>
              ) : (
                <h1
                  className="flex h-full items-center justify-center py-3 text-center font-notoserif font-bold uppercase 2xl:py-10"
                  style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}
                >
                  {activeUseCase.label}
                </h1>
              )}
            </div>
            <NavButton
              className="absolute right-[3%] z-40 h-10 rounded-full p-2 2xl:p-1 disabled:text-gray-400 disabled:hover:bg-transparent"
              onClick={() => {
                setUseCaseNumber((prev) => (prev + 1) % useCaseCount);
                isFlipped && setIsFlipped(false);
                setAnimationState("slideFromLeft");
              }}
            >
              <ChevronRight className="size-6 2xl:size-8" />
            </NavButton>
          </div>
        </div>
      </div>
    </div>
  );
}
