import {
  FeatureButton,
  FeaturesCard,
  LeafCircle,
} from "@/components/ui/button";
import { useState } from "react";

import { FEATURES } from "@/components/constants/constants";

export function Features() {
  const features = FEATURES;
  const [chosenFeature, setChosenFeature] = useState(features[0]);
  const [chosenStep, setChosenStep] = useState(0);

  const extension = chosenFeature.gif[chosenStep].split(".").pop();

  return (
    <div className="min-h-[70vh] w-[90vw] mx-auto">
      <div className="flex justify-center items-center h-[20vh] 2xl:text-5xl text-4xl font-notojp">
        Key Features
      </div>
      <div className="flex justify-center items-center min-h-[15vh] ">
        <div className="flex flex-wrap justify-center">
          {features.map((feature) => (
            <FeatureButton
              key={feature.name}
              onClick={() => {
                setChosenFeature(feature);
              }}
              className={`m-2 ${chosenFeature.name == feature.name ? "bg-leaf text-white" : ""}`}
            >
              {feature.name}
            </FeatureButton>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center min-h-[60vh]items-start pb-[12vh]">
        <div className="flex flex-col items-center w-full 2xl:w-1/2 gap-[2vh] my-[3%] h-auto">
          {chosenFeature.steps.map((step, index) => (
            <FeaturesCard
              className="flex flex-row gap-2"
              key={chosenFeature.name + " " + index}
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
            <img src={chosenFeature.gif[chosenStep]} alt="" className="h-3/4 2xl:h-auto"/>
          ) : (
            <video
              width="700"
              autoPlay
              loop
              muted
              key={chosenFeature.gif[chosenStep]}
            >
              <source src={chosenFeature.gif[chosenStep]} type="video/mp4" />
            </video>
          )}
        </div>
        
      </div>
      <br /><br /><br />
    </div>
  );
}
