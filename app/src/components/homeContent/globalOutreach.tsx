import MapBackground from "@/assets/map.svg";
import { useState } from "react";
import { COMPANIES, COUNTRIES } from "../constants/constants";

export function GlobalOutreach() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);


  return (
    <div className="h-auto w-full bg-background ">
      <div className="text-gray-600 text-4xl 2xl:text-6xl font-bold text-center py-[3%]">
        Our Global Outreach
      </div>
      <div
        style={{ backgroundImage: `url(${MapBackground})` }}
        className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat min-h-[40vh] md:min-h-[70vh] mb-[10vh]"
      >
        <div className="flex flex-wrap gap-y-14 gap-x-[4%] items-center justify-center w-3/4">
          {COUNTRIES.map((country) => (
            <div className="relative" key={country.name}>
              <img
                src={country.flag}
                alt={country.name}
                className={`h-[10vh] sm:h-[15vh] lg:h-[20vh] block ${hoveredCountry === country.name ? "scale-125" : "scale-100"}`}
                onMouseEnter={() => setHoveredCountry(country.name)}
                onMouseLeave={() => setHoveredCountry(null)}
              />

              <div
                className={`absolute w-full text-xl py-[12%] font-notojp ${hoveredCountry != country.name ? "hidden" : ""}`}
              >
                <p className="flex justify-center items-center 2xl:text-3xl">
                  {country.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row pt-[10vh] font-notojp text-md text-xl 2xl:text-3xl">
          Available in 14 languages!
        </div>
      </div>

      <div className="flex flex-col items-center min-h-[30vh] gap-[2vh] mt-[10%] max-w-[80vw] mx-auto my-[5vh]">
        <h3 className="flex flex-row h-[10vh] font-space">
          We have worked with
        </h3>
        <div className="flex flex-row flex-wrap relative gap-x-[10vw] justify-center gap-y-[3vh] max-w-screen">
          {COMPANIES.map((company) => (
            <img src={company.logo} alt="" key={company.name} className="flex h-[6vh] w-auto"/>
          ))}
          <span className="flex absolute bottom-0 right-10 italic text-base 2xl:text-2xl">and more!</span>
        </div>
        
      </div>
    </div>
  );
}
