import { Link } from "react-router-dom";
import { CTAButton } from "@/components/ui/button";
import {
  ArrowRightIcon,
  BookOpenCheck,
  Bot,
  ChartLine,
  Info,
  NotebookText,
} from "lucide-react";
import homepg from "@/assets/homepage screen.svg";
import { useHover } from "@/lib/utils";
import AboutUsBg from "@/assets/AboutUsBg.jpg";

export function HomeMain() {
  const { customRef, hovering } = useHover();

  return (
    <div
      className="bg-contain bg-no-repeat"
      style={{ backgroundImage: `url(${AboutUsBg})` }}
    >
      <div className="flex flex-row w-[90vw] mx-auto gap-[1%]">
        <div className="flex flex-col md:w-[40%] z-20">
          <div className="flex flex-col min-h-[50vh] md:min-h-[90vh] justify-center animate-slideInRight">
            <h1>Transform Knowledge Into Personalized Learning</h1>
            <br />
            <div className="text-lg 2xl:text-2xl font-space pb-6">
              Asagami converts notes, SOPs, videos, manuals, and teaching
              materials into structured learning, adaptive quizzes, AI-supported
              revision, and real-time learning insights.
            </div>
            <div>
              <Link to="/features">
                <CTAButton className="flex items-center justify-center gap-1 ps-6 text-base 2xl:text-2xl 2xl:py-[25px]">
                  Discover Features <ArrowRightIcon className="inline" />
                </CTAButton>
              </Link>
            </div>
          </div>
          <div className="mb-[15%] mt-[30%]">
            <div className="flex relative flex-row items-center gap-2 pb-10">
              <h2>How Asagami AI Works</h2>
              <Info className="inline text-gray-800" ref={customRef} />
              <div className="flex items-center relative">
                {hovering && (
                  <div className="absolute bg-[#c4c4c4]  font-sans rounded text-base p-2 w-40">
                    Click on each feature to find out more!
                  </div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-[2%] gap-y-[6%]">
              <div className="flex flex-col">
                <Link
                  to="/features/INC"
                  className="hover:shadow-xs rounded-lg hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] p-[8%]"
                >
                  <NotebookText
                    className="text-leaf"
                    size={45}
                    strokeWidth={1.5}
                  />
                  <p className="font-semibold font-notojp text-xl 2xl:text-3xl py-[3%]">
                    Intelligent Note Creation
                  </p>
                  <p className="text-base 2xl:text-lg">
                    Customise clear and organized notes from scratch or from
                    existing materials
                  </p>
                </Link>
              </div>
              <div className="flex flex-col">
                <Link
                  to="/features/PQD"
                  className="hover:shadow-xs rounded-lg hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] p-[8%]"
                >
                  <BookOpenCheck
                    className="text-leaf"
                    size={45}
                    strokeWidth={1.5}
                  />
                  <p className="font-semibold font-notojp text-xl 2xl:text-3xl py-[3%]">
                    Personalized Quiz Design
                  </p>
                  <p className="text-base 2xl:text-lg">
                    Automatically generate adaptive quizzes tailored to specific
                    topics and learning goals.
                  </p>
                </Link>
              </div>
              <div className="flex flex-col">
                <Link
                  to="/features/LearningAnalytics"
                  className="hover:shadow-xs rounded-lg hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] p-[8%]"
                >
                  <ChartLine
                    className="text-leaf"
                    size={45}
                    strokeWidth={1.5}
                  />
                  <p className="font-semibold font-notojp text-xl 2xl:text-3xl py-[3%]">
                    Learning Analytics
                  </p>
                  <p className="text-base 2xl:text-lg">
                    Track learner progress, weak points, engagement, and
                    performance in real time.
                  </p>
                </Link>
              </div>
              <div className="flex flex-col">
                <Link
                  to="/features/Chatbot"
                  className="hover:shadow-xs rounded-lg hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] p-[8%]"
                >
                  <Bot className="text-leaf" size={45} strokeWidth={1.5} />
                  <p className="font-semibold font-notojp text-xl 2xl:text-3xl py-[3%]">
                    Chatbot
                  </p>
                  <p className="text-base 2xl:text-lg">
                    Provide instant chatbot guidance and clarification whenever
                    learners need help.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT COLUMN — sticky image */}
        <div className="hidden md:flex flex-col w-auto mx-auto pb-[4%]">
          <div className="sticky top-[20%] flex justify-center">
            <img src={homepg} alt="" className="h-[70vh] w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
