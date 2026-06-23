import { ABOUTASAGAMI } from "@/components/constants/constants";
import Dai from "@/assets/aboutus/Dai.png";
import Masa from "@/assets/aboutus/Masa.jpg";
import Takeshi from "@/assets/aboutus/Takeshi.png";
import { Facebook, Linkedin, Moon } from "lucide-react";
import { Link } from "react-router-dom";

export function Team() {
  return (
    <div className="flex flex-col w-[90vw] min-h-screen mx-auto py-[5vh]">
      <div>
        <h2 className="font-notoserif font-[700] h-[8vh] ">Company Outline</h2>
        <br />
        <div className="flex flex-col w-full px-[1vw]  text-xl">
          {ABOUTASAGAMI.map((item) => (
            <div
              className="flex flex-col md:flex-row border-b border-gray-300 pt-[2vh] pb-[0.5%]"
              key={item.label}
            >
              <div className="flex w-1/5 md:flex-col flex-shrink-0 w-1/6 text-gray-600 font-[700] font-notoserif">
                {item.label}
              </div>
              {Array.isArray(item.value) ? (
                <div className="flex flex-col font-notojp gap-y-4">
                  {item.value.map((subItem) => (
                    <div key={subItem.subLabel}>
                      <p className="font-bold underline">{subItem.subLabel}</p>
                      <p className="font-[500]">{subItem.value}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="flex flex-col font-[500]">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col py-[5vh] justify-center">
        <div className="flex items-center justify-center text-center h-[15vh]">
          <h2>Meet the Team!</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly">
          <div className="order-2 md:order-1">
            <div
              className="rounded-t-xl relative h-[50vh] lg:w-[22vw] bg-no-repeat bg-cover "
              style={{
                backgroundImage: `url(${Dai})`,
                backgroundPosition: "center",
              }}
            />
            <div className="bg-white rounded-b-xl p-3">
              <h3>Dai Deguchi</h3>
              <p className="text-[#6236F5] pb-2">Co-Founder, Finance Lead</p>
              <p className="flex gap-[5%] text-gray-400">
                <Link
                  to="https://www.linkedin.com/in/daideguchi/"
                  target="_blank"
                >
                  <Linkedin className="hover:text-blue-500 hover:scale-[1.3] hover:border hover:rounded" />
                </Link>
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div
              className="rounded-t-xl relative h-[50vh] lg:w-[22vw] bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${Masa})`,
                backgroundPosition: "center",
              }}
            ></div>
            <div className="bg-white rounded-b-xl p-3">
              <h3>Masatoshi Sonoda</h3>
              <p className="text-[#6236F5] pb-2">Founder, CEO</p>
              <p className="flex gap-[5%] text-gray-400">
                <Facebook className="hover:text-blue-500 hover:scale-[1.3] hover:border hover:rounded" />
                <Link
                  to="https://www.linkedin.com/in/masatoshi-sonoda-eletus/"
                  target="_blank"
                >
                  <Linkedin className="hover:text-blue-500 hover:scale-[1.3] hover:border hover:rounded" />
                </Link>
              </p>
            </div>
          </div>
          <div className="order-3">
            <div
              className="rounded-t-xl relative h-[50vh] lg:w-[22vw] bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${Takeshi})`,
                backgroundPosition: "center",
              }}
            ></div>
            <div className="bg-white rounded-b-xl p-3">
              <h3>Harada Takeshi</h3>
              <p className="text-[#6236F5] pb-2">Chief Technology Officer</p>
              <p className="flex gap-[5%] text-gray-400">
                <Moon />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
