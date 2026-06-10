import logo from "@/assets/eletus-logo.jpg";
import { CTAButton, HeaderButton } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isSettingsExpanded, setSettingsExpanded] = useState(false);
  const [isAboutExpanded, setAboutExpanded] = useState(false);
  return (
    <div className="flex w-full py-3 min-h-[8vh] px-20 items-center">
      <Link to="/">
        <HeaderButton className="text-left flex items-center hover:bg-background">
          <img
            src={logo}
            alt=""
            className=" inline h-smLogo bg-opacity-0 rounded"
          />
          <div className="ps-3 leading-none">
            <strong className="font-notojp">Eletus 株式会社</strong>
            <br />
            <span className="font-space text-xs uppercase text-gray-500 text-capital">
              Personal Computer Ideal / AI Era
            </span>
          </div>
        </HeaderButton>
      </Link>
      <div className="ml-auto gap-3 flex">
        <Link to="/features">
          <HeaderButton>Features</HeaderButton>
        </Link>
        {/* <Link to="/aboutasagami">
          <HeaderButton>About Asagami</HeaderButton>
        </Link> */}
        <div className="flex relative">
          <HeaderButton
            onClick={()=>setAboutExpanded(!isAboutExpanded)}>
            About Us
            {isAboutExpanded ? (
              <ChevronUp className="ms-1" size={15} />
            ) : (
              <ChevronDown className="ms-1" size={15} />
            )}
          </HeaderButton>
          {isAboutExpanded && (
            <div className="absolute flex justify-center border top-full right-0 bg-white bg-opacity-90 rounded-xl p-3 mt-1 ">
              <ul className="whitespace-nowrap">
                <Link to="">
                  <li> - Main </li>
                </Link>
                <Link to="https://www.eletus.co.jp/philosophy/" target="_blank">
                  <li> - Eletus </li>
                </Link>
              </ul>
            </div>
          )}
        </div>
        <div className="flex relative">
          <HeaderButton
            onClick={() => setSettingsExpanded(!isSettingsExpanded)}
          >
            Settings
            {isSettingsExpanded ? (
              <ChevronUp className="ms-1" size={15} />
            ) : (
              <ChevronDown className="ms-1" size={15} />
            )}
          </HeaderButton>

          {isSettingsExpanded && (
            <div className="absolute flex justify-center border top-full right-0 bg-white bg-opacity-90 rounded-xl p-3 mt-1 ">
              <ul className="whitespace-nowrap">
                <Link
                  to="/"
                  className="hover:bg-gray-200 visited:text-purple-600"
                >
                  <li>- English</li>
                </Link>
                <Link
                  to="/"
                  className="hover:bg-gray-200 visited:text-purple-600"
                >
                  <li>- Japanese</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
        <div></div>
        <CTAButton>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfjsScFSVHqQLvXsUbW_J84qFjJsA8cUXuR1t0g6iKcaVAu7w/viewform"
            target="_blank"
          >
            Contact Us
          </a>
        </CTAButton>
      </div>
    </div>
  );
}
