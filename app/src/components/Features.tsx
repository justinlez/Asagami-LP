import { FeatureButton, LeafButton } from "@/components/ui/button";
import { useState } from "react";

import { FeaturesCard } from "./ui/featuresCard";
import { FEATURES } from "@/components/constants/constants";

export function Features() {
  
    const features = FEATURES
  const [chosenFeature, setChosenFeature] = useState(features[0]);

  return (
    <div className="min-h-[70vh] w-[90vw] mx-auto">
      <div className="flex justify-center items-center h-[20vh] 2xl:text-7xl text-4xl">
        Key Features
      </div>
      <div className="flex justify-center min-h-[30vh] py-[2%] ">
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
      <div className="flex justify-center">
        <div className="flex flex-col items-center justify-center w-1/2 gap-[6%]">
          {chosenFeature.steps.map((step, index) => (
            <FeaturesCard className="flex flex-row gap-2">
              <LeafButton>{index}</LeafButton> <p>{step}</p>
            </FeaturesCard>
          ))}
        </div>
        <div className="flex w-1/2">The image</div>
      </div>
    </div>
  );
}
