import {
  FeatureButton,
  FeaturesCard,
  LeafCircle,
} from "@/components/ui/button";
import { useEffect, useMemo, useState } from "react";

import { FEATURES } from "@/components/constants/constants";
import AboutUsBg2 from "@/assets/AboutUsBg2.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { useHover } from "@/lib/utils";
import { Info } from "lucide-react";

export function Features() {
  const navigate = useNavigate();
  const featurePath = useParams().featureName;
  const { customRef, hovering } = useHover();

  const feature = featurePath ? FEATURES[featurePath] : undefined;
  const INFOTOOLTIPCONTENT = "Click through each step to see a visual guide.";
  const [chosenStep, setChosenStep] = useState(0);
  const extension = feature ? feature.gif[chosenStep].split(".").pop() : null;

  const featuresArray = useMemo(() => Object.entries(FEATURES), []);

  useEffect(() => {
    setChosenStep(0);
  }, [featurePath]);

  return (
    <div
      className="flex w-full min-h-[78vh] bg-contain"
      style={{ backgroundImage: `url(${AboutUsBg2})` }}
    >
      <div className="flex flex-col w-[90vw] justify-center mx-auto bg-contain">
        <div className="flex justify-center items-center h-[20vh]">
          {feature ? (
            <div className="flex h-full items-center gap-x-[1vw] font-normal text-5xl 2xl:text-7xl font-notoserif relative">
              {feature.name}{" "}
              <Info
                className="inline text-gray-800 2xl:size-8"
                ref={customRef}
              />
              <div className="flex items-center">
                {hovering && (
                  <div className="absolute bg-[#c4c4c4] bg-opacity-70 z-20 font-normal font-sans rounded text-base p-[3%] w-40">
                    {INFOTOOLTIPCONTENT}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col text-center gap-3">
              <h2 className="text-5xl 2xl:text-6xl">Key Features</h2>
              <p className="text-gray-500 italic text-xs 2xl:text-base">
                Click on each feature to find out more!
              </p>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center min-h-[15vh] ">
          <div className="flex flex-wrap justify-center">
            {featuresArray.map((featureObj) => (
              <FeatureButton
                key={featureObj[0]}
                onClick={() => {
                  navigate("/features/" + featureObj[1].path);
                  setChosenStep(0);
                }}
                className={`bg-background m-2 ${featurePath == featureObj[1].path ? "bg-leaf text-white" : ""}`}
              >
                {featureObj[1].name}
              </FeatureButton>
            ))}
          </div>
        </div>
        {featurePath && (
          <div className="flex flex-wrap justify-center min-h-[60vh]items-start pb-[12vh]">
            <div className="flex flex-col items-center w-full 2xl:w-1/2 gap-[2vh] my-[3%] h-auto">
              {feature.steps.map((step, index) => (
                <FeaturesCard
                  className={`flex flex-row gap-2 ${featurePath == "Chatbot" || featurePath == "CurricPlanning" ? "" : chosenStep !== index ? "opacity-75" : " scale-[1.05]"} `}
                  key={featurePath + " " + index}
                  disabled={
                    featurePath == "Chatbot" || featurePath == "CurricPlanning"
                  }
                  onClick={() => {
                    setChosenStep(index);
                  }}
                >
                  <LeafCircle>{index + 1}</LeafCircle> <p>{step}</p>
                </FeaturesCard>
              ))}
            </div>
            <div className="flex flex-col w-full 2xl:w-1/2 justify-start items-center my-[3%]">
              {extension == "jpg" ? (
                <img
                  src={feature.gif[chosenStep]}
                  alt=""
                  className="h-3/4 2xl:h-auto"
                />
              ) : (
                <video
                  width=""
                  autoPlay
                  loop
                  controls
                  muted
                  key={feature.gif[chosenStep]}
                >
                  <source src={feature.gif[chosenStep]} type="video/mp4" />
                </video>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
