import { FeatureButton } from "@/components/ui/button";
import { useState } from "react";
import { INC } from "@/components/featuresContent/INC";
import { Chatbot } from "@/components/featuresContent/Chatbot";
import { PQD } from "@/components/featuresContent/PQD";
import { LearningAnalytics } from "@/components/featuresContent/LearningAnalytics";
import { AdminPanel } from "@/components/featuresContent/AdminPanel";
import { CurricPlanning } from "@/components/featuresContent/CurricPlanning";

export function Features(){

    const features = [
        {name: 'Intelligent Note Creation', component: <INC/>},
        {name: "Personalized Quiz Design", component: <PQD/>},
        {name: "Learning Analytics", component: <LearningAnalytics/>},
        {name: "24/7 Assistance", component: <Chatbot/>},
        {name: "Admin Panel", component: <AdminPanel/>},
        {name: "Curriculum Planning", component: <CurricPlanning/>},
    ]
    
    const [chosenFeature, setChosenFeature] = useState(features[0]);

    
    return (
        <div className="min-h-[70vh] w-[90vw] mx-auto">
            <div className="flex justify-center items-center h-[20vh] 2xl:text-7xl text-4xl">
                Key Features
            </div>
            <div className="flex justify-center min-h-[30vh] py-[2%] ">
                <div className="flex flex-wrap justify-center">
                    {features.map((feature) => (
                        <FeatureButton key={feature.name} onClick={()=>{setChosenFeature(feature)}} className={`m-2 ${chosenFeature.name == feature.name ? 'bg-leaf text-white': ''}`}>
                            {feature.name}
                        </FeatureButton>
                    ))}
                </div>
            </div>
            {chosenFeature.component}
            

        </div>
    )
}