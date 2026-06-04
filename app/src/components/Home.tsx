import homepg from "@/assets/homepage screen.svg";
import { CTAButton } from "./ui/button";
import {
  ArrowRightIcon,
  BookOpenCheck,
  Bot,
  ChartLine,
  Info,
  NotebookText,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useHover } from "@/lib/utils";

export function Home() {
  const { customRef, hovering } = useHover();

  return (
    <div className="flex flex-row w-[90%] mx-auto gap-[1%]">
      {/* LEFT COLUMN — hero + features stacked */}
      <div className="flex flex-col w-[40%]">
        {/* Row 1 — Hero */}
        <div className="flex flex-col min-h-[90vh] justify-center">
          <div className="text-3xl 2xl:text-7xl font-bold font-notojp">
            Transform Knowledge Into Personalized Learning
          </div>
          <br />
          <div className="text-base 2xl:text-2xl font-space pb-6">
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
        {/* Row 2 — How Asagami Works */}
        <div className="pb-20">
          <div className="flex flex-row text-xl 2xl:text-5xl font-bold font-notojp items-center gap-2 pb-10">
            How Asagami AI Works
            <Info className="inline text-gray-800" ref={customRef} />
            <div className="flex items-center">
              {hovering && (
                <div className="absolute bg-gray-300 z-40 font-normal font-sans rounded text-base p-3">
                  Click on each feature to find out more
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col">
              <Link to="/features" className='hover:shadow-xs rounded-lg hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] p-4'>
                <NotebookText
                  className="text-leaf"
                  size={45}
                  strokeWidth={1.5}
                />
                <p className="font-semibold font-notojp text-lg 2xl:text-3xl">
                  Intelligent Note Creation
                </p>
                <p className="text-base 2xl:text-lg">
                  Customise clear and organized notes from scratch or from
                  existing materials
                </p>
              </Link>
            </div>
            <div className="flex flex-col">
              <Link to="/features" className='hover:shadow-xs rounded-lg hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] p-4'>
                <BookOpenCheck
                  className="text-leaf"
                  size={45}
                  strokeWidth={1.5}
                />
                <p className="font-semibold font-notojp text-lg 2xl:text-3xl">
                  Personalized Quiz Design
                </p>
                <p className="text-base 2xl:text-lg">
                  Automatically generate adaptive quizzes tailored to specific
                  topics and learning goals.
                </p>
              </Link>
            </div>
            <div className="flex flex-col">
              <Link to="/features" className='hover:shadow-xs rounded-lg hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] p-4'>
                <ChartLine className="text-leaf" size={45} strokeWidth={1.5} />
                <p className="font-semibold font-notojp text-lg 2xl:text-3xl">
                  Analytics
                </p>
                <p className="text-base 2xl:text-lg">
                  Track learner progress, weak points, engagement, and
                  performance in real time.
                </p>
              </Link>
            </div>
            <div className="flex flex-col">
              <Link to="/features" className='hover:shadow-xs rounded-lg hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] p-4' >
                <Bot className="text-leaf" size={45} strokeWidth={1.5} />
                <p className="font-semibold font-notojp text-lg 2xl:text-3xl">
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
      <div className="flex flex-col w-auto mx-auto">
        <div className="sticky top-40 flex justify-center">
          <img src={homepg} alt="" className="h-[70vh] w-auto" />
        </div>
      </div>
    </div>
  );
}
