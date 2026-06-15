import AboutUsBg from "@/assets/AboutUsBg.jpg";

export function Mission() {


  return (
    <div className={`flex min-h-screen justify-center bg-contain bg-no-repeat`}style={{ backgroundImage: `url(${AboutUsBg})` } }>
        <div className="flex flex-col w-[90vw]">
            <div className="flex text-5xl font-mono h-[30vh] items-center animate-slideInRight">
              Our Mission, Vision & Philosophy
            </div>
            <div className="flex w-5/6 mx-auto mt-[3%] justify-between gap-[4%]" >
              <div className="flex flex-col w-[33%]  hover:scale-[1.1] transition- duration-200">
                <p className="text-center text-4xl text-leaf font-semibold border-leaf border-b-2 mx-[20%] mb-[5%]">Mission</p>
                <p className="text-center"><strong className="italic">Connecting individual understanding</strong> and judgment to the world through globally impactful software.</p>
              </div>
              <div className="flex flex-col w-[33%] hover:scale-[1.1] transition- duration-200">
                <p className="text-center text-4xl text-leaf font-semibold border-leaf border-b-2 mx-[20%] mb-[5%]">Vision</p>
                <p className="text-center">Building the knowledge infrastructure that <strong className="italic">shapes culture</strong> and <strong className="italic">carries human expertise</strong> into the future.</p>
              </div>
              <div className="flex flex-col w-[33%] hover:scale-[1.1] transition- duration-200">
                <p className="text-center text-4xl text-leaf font-semibold border-leaf border-b-2 mx-[20%] mb-[5%]">Philosophy</p>
                <p className="text-center">Strengthen human judgment through the responsible integration of AI. Enable individuals and organizations to realize their <strong className="italic">full potential</strong> by making knowledge accessible, actionable, and empowering.</p>
              </div>
            </div>
        </div>
        
      </div>
  );
}
