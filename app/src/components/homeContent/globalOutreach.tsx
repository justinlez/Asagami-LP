import MapBackground from "@/assets/map.svg";
import usa from "@/assets/countries/unitedstates.svg";
import japan from "@/assets/countries/japan.svg";
import philippines from "@/assets/countries/philippines.svg";
import singapore from "@/assets/countries/singapore.svg";
import taiwan from "@/assets/countries/taiwan.svg";
import vietnam from "@/assets/countries/vietnam.svg";
import daihatsu from "@/assets/companies/daihatsu.svg";
import kyushuElect from "@/assets/companies/kyushuElect.svg";
import nipponBank from "@/assets/companies/nipponBank.svg";
import NTOU from "@/assets/companies/NTOU.svg";
import { useState } from "react";

export function GlobalOutreach() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const countries = [
    { name: "USA", flag: usa },
    { name: "Japan", flag: japan },
    { name: "Philippines", flag: philippines },
    { name: "Singapore", flag: singapore },
    { name: "Taiwan", flag: taiwan },
    { name: "Vietnam", flag: vietnam },
  ];
  const companies = [
    { name: "Daihatsu", logo: daihatsu },
    { name: "Kyushu Electric", logo: kyushuElect },
    { name: "Nippon Bank", logo: nipponBank },
    { name: "NTOU", logo: NTOU },
  ];

  return (
    <div className="h-auto w-full bg-background">
      <div className="text-gray-600 text-4xl 2xl:text-6xl font-bold text-center py-[3%]">
        Our Global Outreach
      </div>
      {/* <img src={MapBackground} alt="" className="-"/> */}
      <div
        style={{ backgroundImage: `url(${MapBackground})` }}
        className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat h-[70vh] mb-[10vh]"
      >
        <div className="flex flex-row gap-x-[3%] justify-center w-3/4">
          {countries.map((country) => (
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
                <p className="flex justify-center items-center">{country.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row pt-[10vh] font-notojp text-md text-xl 2xl:text-3xl">
          Available in 14 languages!
        </div>
      </div>

      <div className="flex flex-col items-center min-h-[30vh] gap-[2vh]">
        <div className="flex flex-row text-xl 2xl:text-3xl font-bold font-space">
          We have worked with
        </div>
        <div className="flex flex-row gap-[5%] justify-center">
          {companies.map((company) => (
            <img src={company.logo} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}
