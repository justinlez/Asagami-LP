import AboutUsBg from "@/assets/AboutUsBg2.jpg";
import {
  BookText,
  Brain,
  ChartLine,
  Gavel,
  GraduationCap,
  Hammer,
  Handshake,
  ThumbsUp,
} from "lucide-react";
import handsome1 from "@/assets/aboutus/handsome1.svg";
import handsome3 from "@/assets/aboutus/handsome2.svg";
import handsome2 from "@/assets/aboutus/handsome3.svg";

export function Mission() {
  return (
    <div
      className={`flex flex-col w-[90vw] min-h-screen mx-auto bg-contain bg-no-repet`}
      style={{ backgroundImage: `url(${AboutUsBg})` }}
    >
      <div className="flex">
        <div className="flex flex-col ">
          <div className="flex text-5xl font-notoserif h-[30vh] items-center animate-slideInRight">
            Our Mission, Vision & Philosophy
          </div>
          <div className="flex w-5/6 mx-auto mt-[3%] justify-between gap-[4%]">
            <div className="flex flex-col w-[33%]  hover:scale-[1.1] transition- duration-200">
              <p className="text-center text-4xl text-leaf font-semibold border-leaf border-b-2 mx-[20%] mb-[5%]">
                Mission
              </p>
              <p className="text-center">
                <strong className="italic">
                  Connecting individual understanding
                </strong>{" "}
                and judgment to the world through globally impactful software.
              </p>
            </div>
            <div className="flex flex-col w-[33%] hover:scale-[1.1] transition- duration-200">
              <p className="text-center text-4xl text-leaf font-semibold border-leaf border-b-2 mx-[20%] mb-[5%]">
                Vision
              </p>
              <p className="text-center">
                Building the knowledge infrastructure that{" "}
                <strong className="italic">shapes culture</strong> and{" "}
                <strong className="italic">carries human expertise</strong> into
                the future.
              </p>
            </div>
            <div className="flex flex-col w-[33%] hover:scale-[1.1] transition- duration-200">
              <p className="text-center text-4xl text-leaf font-semibold border-leaf border-b-2 mx-[20%] mb-[5%]">
                Philosophy
              </p>
              <p className="text-center">
                Strengthen human judgment and reach{" "}
                <strong className="italic">full potential</strong> through responsible integration of AI, making knowledge accessible, actionable and enduring
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center">
        <div className="flex flex-col w-1/2">
          <img src={handsome1} alt="" />
        </div>
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col gap-y-[3vh]">
            <h2 className="text-[#331B3B]">Our Philosophy</h2>
            <p className="text-lg 2xl:text-3xl font-notoserif pb-6">
              Instead of making AI stronger, we should strengthen human
              understanding and judgement.
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-500 font-notojp">
              Eletus aims for a world where user-friendly AI and human autonomy
              coexist. We want to return powerful intellectual capabilities to
              the hands of every individual, rather than keeping them as a
              privilege for a select few. We are refining this philosophy
              through software and learning experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center h-[75vh]">
        <div className="flex flex-col w-1/2 px-[3%] h-full justify-evenly">
          <div>
            <h3>
              <span className="text-leaf">01</span> A human-friendly AI
            </h3>
            <p>
              Eletus aims to build AI that enhances human understanding and
              supports thoughtful decision-making. It encourages independent
              thinking without becoming overly reliant on technology
            </p>
          </div>
          <div>
            <h3>
              <span className="text-leaf">02</span> Humans are the Masters
            </h3>
            <p>
              AI is not meant to replace people, but to strengthen human
              understanding, judgment, and execution. This supports the
              fundamentally human capacities to set goals, make value judgments,
              and take responsibility.
            </p>
          </div>
          <div>
            <h3>
              <span className="text-leaf">03</span> Personal Computers in the
              age of AI
            </h3>
            <p>
              Eletus believes that powerful intellectual capabilities should be
              accessible to every individual, not treated as a privilege. Our
              philosophy is to reimagine this vision through modern AI-powered
              software that empowers human potential.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-1/2 items-center">
          <img src={handsome2} alt="" width={"75%"} />
        </div>
      </div>
      <div className="flex w-full items-center">
        <div className="flex flex-col w-1/2 pe-10">
          <img src={handsome3} alt="" />
        </div>
        <div className="flex flex-col w-1/2 gap-y-[3vh]">
          <h2 className="font-notoserif">
            Empowering Human Understanding, Judgement, and Action
          </h2>
          <p>
            {" "}
            At Eletus, our products and educational experiences are designed to
            do more than simply provide information.{" "}
          </p>
          <p>
            Our goal is to strengthen people's ability to understand, make
            informed decisions, and take meaningful action. To achieve this, we
            carefully design both our AI and user experience around human growth
            and autonomy.
          </p>
        </div>
      </div>
      <div className="flex w-full my-24">
        <div className="flex flex-col w-1/3 gap-[1vh] px-[3vw] items-center text-center">
          <h3 className="flex items-center gap-[1vw]">
            <BookText className="text-leaf stroke-1 size-8 2xl:size-14" />
            <span className="font-space uppercase">Think</span>{" "}
          </h3>
          <p className="w-[90%]">
            Transform information into understanding by organizing knowledge
            into clear, meaningful insights.
          </p>
        </div>
        <div className="flex flex-col w-1/3 gap-[1vh] px-[3vw] items-center text-center border-x-2 border-gray-300">
          <h3 className="flex items-center gap-[1vw]">
            <Gavel className="text-leaf stroke-1 size-8 2xl:size-14" />
            <span className="font-space uppercase">Decide</span>{" "}
          </h3>
          <p className="w-[90%]">
            Support informed decision-making while ensuring that judgment,
            values, and responsibility remain with the individual.
          </p>
        </div>
        <div className="flex flex-col w-1/3 gap-[1vh] px-[3vw] items-center text-center">
          <h3 className="flex items-center gap-[1vw]">
            <Brain className="text-leaf stroke-1 size-8 2xl:size-14" />
            <span className="font-space uppercase">Act</span>{" "}
          </h3>
          <p className="w-[90%]">
            Bridge the gap between learning and execution, helping people apply knowledge confidently in the real world.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full items-center my-[5vh]">
        <h2 className="flex font-notoserif text-bluePrimary">What We Value in Everyday Decision-Making</h2>
        <div className="flex flex-wrap justify-center p-[6%] gap-y-[5vh] gap-x-[5%]">
          <div className="w-1/4 text-center">
            <GraduationCap className="text-leaf stroke-1 size-8 2xl:size-14 mx-auto" />{" "}
            <h3 className="font-semibold font-sans">Learn, Grow, Enjoy the Journey</h3>
          </div>
          <div className="w-1/4 text-center">
            <Handshake className="text-leaf stroke-1 size-8 2xl:size-14 mx-auto" />{" "}
            <h3 className="font-semibold font-sans">The power of Combinining Different Perspecitves</h3>{" "}
          </div>
          <div className="w-1/4 text-center">
            <Hammer className="text-leaf stroke-1 size-8 2xl:size-14 mx-auto" />{" "}
            <h3 className="font-semibold font-sans">Stay Hands-On and Deliver Results</h3>
          </div>
          <div className="w-1/4 text-center">
            <ChartLine className="text-leaf stroke-1 size-8 2xl:size-14 mx-auto" />{" "}
            <h3 className="font-semibold font-sans">Take Action. Do it Right. Create Impact.</h3>
          </div>
          <div className="w-1/4 text-center">
            <ThumbsUp className="text-leaf stroke-1 size-8 2xl:size-14 mx-auto" />{" "}
            <h3 className="font-semibold font-sans">Make your Choices the Right Ones</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
