import AboutUsBg from "@/assets/AboutUsBg.jpg";
import { useHover } from "@/lib/utils";

export function AboutAsagami() {


  return (
    <div className={`flex min-h-screen justify-center bg-contain bg-no-repeat`}style={{ backgroundImage: `url(${AboutUsBg})` }}>
        <div className="flex flex-col w-[90vw]">
            <div className="flex text-5xl font-mono h-[30vh] items-center">
              Our Mission, Vision & Philosophy
            </div>
            <div className="flex w-5/6 mx-auto mt-[4%] justify-between gap-[4%]" >
              <div className="flex flex-col w-[33%]  hover:scale-[1.1] transition- duration-200">
                <p className="text-center text-4xl text-leaf font-semibold border-leaf border-b-2 mx-[20%] mb-[5%]">Mission</p>
                <p className="text-center">Connecting individual understanding and judgment to the world through globally impactful software.</p>
              </div>
              <div className="flex flex-col w-[33%] hover:scale-[1.1] transition- duration-200">
                <p className="text-center text-4xl text-leaf font-semibold border-leaf border-b-2 mx-[20%] mb-[5%]">Vision</p>
                <p className="text-center">Building the knowledge infrastructure that shapes culture and carries human expertise into the future.</p>
              </div>
              <div className="flex flex-col w-[33%] hover:scale-[1.1] transition- duration-200">
                <p className="text-center text-4xl text-leaf font-semibold border-leaf border-b-2 mx-[20%] mb-[5%]">Philosophy</p>
                <p className="text-center">Strengthen human judgment through the responsible integration of AI. Enable individuals and organizations to realize their <strong className="italic">full potential</strong> by making knowledge accessible, actionable, and enduring.</p>
              </div>
            </div>
        </div>
        
      </div>
  );
}
