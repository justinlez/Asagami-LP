import { FeatureButton, LeafButton } from "@/components/ui/button";
import { useState } from "react";

import { FeaturesCard } from "./ui/featuresCard";
import { FEATURES } from "@/components/constants/constants";
import PQDGIF from "@/assets/PQDAni.mp4";

export function Features() {
  const features = FEATURES;
  const [chosenFeature, setChosenFeature] = useState(features[0]);

  return (
    <div className="min-h-[70vh] w-[90vw] mx-auto">
      <div className="flex justify-center items-center h-[20vh] 2xl:text-6xl text-4xl font-notojp">
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
      <div className="flex flex-wrap justify-center min-h-[60vh]">
        <div className="flex flex-col items-center w-full 2xl:w-1/2 gap-[6%] my-[3%]">
          {chosenFeature.steps.map((step, index) => (
            <FeaturesCard className="flex flex-row gap-2">
              <LeafButton>{index + 1}</LeafButton> <p>{step}</p>
            </FeaturesCard>
          ))}
        </div>
        <div className="flex flex-col w-full 2xl:w-1/2 justify-start items-center my-[3%]">
          <video width="600" autoPlay loop muted >
            <source src={PQDGIF} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
