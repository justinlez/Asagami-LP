import homepg from "@/assets/homepage screen.svg";
import { CTAButton } from "./ui/button";
import { ArrowRightIcon, BookOpenCheck, Bot, ChartLine, Info, NotebookText } from "lucide-react";
import { Link } from "react-router-dom";
import { useHover } from "@/lib/utils";

export function Home() {
  const { customRef, hovering } = useHover();
  console.log(customRef, hovering);
  return (
    <div>
      <div className="flex flex-row min-h-[700px] pb-[150px]">
        <div className="flex flex-col w-[600px] ps-20 my-auto">
          <div className="flex text-4xl font-bold font-notojp">
            Transform Knowledge Into Personalized Learning
          </div>
          <br />
          <div className="flex font-space pb-6">
            Asagami converts notes, SOPs, videos, manuals, and teaching
            materials into structured learning, adaptive quizzes, AI-supported
            revision, and real-time learning insights.
          </div>
          <div className="flex">
              <Link to="/features">
                <CTAButton className="flex items-center justify-center gap-1 ps-6">
                  Discover Features <ArrowRightIcon className="inline" />
                </CTAButton>
              </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center m-auto my-6 sticky ">
          <img src={homepg} alt="" className="h-[450px] w-auto" />
        </div>
      </div>
      <div className="flex flex-row text-4xl font-bold font-notojp items-center gap-2 ps-20 pb-10">
        How Asagami AI Works <Info className="inline text-gray-800" ref={customRef} />
        {hovering && (
        <div className="relative bg-gray-300 p-2 font-normal font-sans rounded text-base me-0">
          Click on each feature to find out more
        </div>
      )}
      </div>
      
      <div className="flex flex-row ps-20">
        <div className="flex flex-col w-2/5">
            <div className="flex flex-row gap-6">
                <div className="flex flex-col">
                    <NotebookText className="text-leaf" size={45} strokeWidth={1.5} />
                    <p className="font-semibold font-notojp">Intelligent Note Creation</p>
                    <p>Customise clear and organized notes from scratch or from existing materials</p>
                </div>
                <div className="flex flex-col">
                    <BookOpenCheck className="text-leaf" size={45} strokeWidth={1.5}/>
                    <p className="font-semibold font-notojp">Personalized Quiz Design</p>
                    <p>Automatically generate adaptive quizzes tailored to specific topics and learning goals.</p>
                </div>
            </div>
            <div className="flex flex-row gap-6">
                <div className="flex flex-col">
                    <ChartLine className="text-leaf" size={45} strokeWidth={1.5}/>
                    <p className="font-semibold font-notojp">Analytics</p>
                    <p>Track learner progress, weak points, engagement, and performance in real time.</p>
                </div>
                <div className="flex flex-col">
                    <Bot className="text-leaf" size={45} strokeWidth={1.5}/>
                    <p className="font-semibold font-notojp">Chatbot</p>
                    <p>
                        Provide instant chatbot guidance and clarification whenever learners need help.
                    </p>
                </div>
            </div>
        </div>
        {/* <div className="flex flex-col m-auto my-6">
            <img src={homepg} alt="" className="h-[450px] w-auto"/>
        </div> */}
      </div>
    </div>
  );
}
