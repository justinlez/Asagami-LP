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
        className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat h-[70vh] mb-[10vh]"
      >
        <div className="flex flex-row gap-x-[3%] justify-center w-3/4">
          {COUNTRIES.map((country) => (
            <div className="relative" key={country.name}>
              <img
                src={country.flag}
                alt={country.name}
                className={`h-[20vh] block ${hoveredCountry === country.name ? "scale-125" : "scale-100"}`}
                onMouseEnter={() => setHoveredCountry(country.name)}
                onMouseLeave={() => setHoveredCountry(null)}
              />

              <div
                className={`absolute w-full text-xl py-[12%] font-notojp ${hoveredCountry != country.name ? "hidden" : ""}`}
              >
                <p className="flex justify-center items-center">
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

      <div className="flex flex-col items-center min-h-[30vh] gap-[2vh] mt-[10%] max-w-[80vw] mx-auto">
        <div className="flex flex-row text-xl 2xl:text-3xl font-bold font-space">
          We have worked with
        </div>
        <div className="flex flex-row flex-wrap gap-x-[5vw] gap-y-[3vh]  max-w-screen justify-evenly">
          {COMPANIES.map((company) => (
            <img src={company.logo} alt="" key={company.name} className="flex h-[6vh] w-auto"/>
          ))}
          <span className="flex w-[100%] justify-end italic">and more!</span>
        </div>
        
      </div>
    </div>
  );
}
