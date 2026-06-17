import logo from "@/assets/eletus-logo.jpg";
import { CTAButton, HeaderButton } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [whichMenuExpanded, setWhichMenuExpanded] = useState<'settings'|'about'|null>(null);
  return (
    <div className="flex w-full relative z-50 py-3 min-h-[9vh] px-20 items-center">
      <Link to="/">
        <HeaderButton className="text-left flex items-center hover:bg-background">
          <img
            src={logo}
            alt=""
            className=" inline h-smLogo bg-opacity-0 rounded"
          />
          <div className="ps-3 leading-none flex-shrink-0">
            <strong className="font-notojp">Eletus 株式会社</strong>
            <br />
            <span className="font-space text-xs uppercase text-gray-500 text-capital">
              Personal Computer Ideal / AI Era
            </span>
          </div>
        </HeaderButton>
      </Link>
      <div className="ml-auto gap-3 flex">
        <Link to="/features" onClick={()=>setWhichMenuExpanded(null)}>
          <HeaderButton>Features</HeaderButton>
        </Link>
        <div className="flex relative flex-shrink-0">
          <HeaderButton
            onClick={()=>setWhichMenuExpanded(whichMenuExpanded === 'about' ? null : 'about')}>
            About Us
            {whichMenuExpanded==='about' ? (
              <ChevronUp className="ms-1 stroke-[1.5] size-5 2xl:size-7" />
            ) : (
              <ChevronDown className="ms-1 stroke-[1.5] size-5 2xl:size-7" />
            )}
          </HeaderButton>
          {whichMenuExpanded === 'about' && (
            <div className="absolute flex justify-center border top-full right-0 bg-white bg-opacity-90 rounded-xl  mt-1 ">
              <ul className="whitespace-nowrap">
                <Link to="/aboutasagami/mission" onClick={()=>setWhichMenuExpanded(whichMenuExpanded === 'about' ? null : 'about')}>
                  <li className="hover:bg-turqoise hover:text-white px-3 py-[5%] rounded-lg "> Mission & Vision </li>
                </Link>
                <Link to='/aboutasagami/team' onClick={()=>setWhichMenuExpanded(whichMenuExpanded === 'about' ? null : 'about')}>
                  <li className="hover:bg-turqoise hover:text-white px-3 py-[5%] rounded-lg "> Company Outline</li>
                </Link>
                <Link to="https://www.eletus.co.jp/philosophy/" target="_blank"  onClick={()=>setWhichMenuExpanded(whichMenuExpanded === 'about' ? null : 'about')}>
                  <li className="hover:bg-turqoise hover:text-white px-3 py-[5%] rounded-lg "> About Eletus </li>
                </Link>
              </ul>
            </div>
          )}
        </div>
        <div className="flex relative">
          <HeaderButton
            onClick={() => setWhichMenuExpanded(whichMenuExpanded === 'settings' ? null : 'settings')}
          >
            Settings
            {whichMenuExpanded ==='settings' ? (
              <ChevronUp className="ms-1 stroke-[1.5] size-5 2xl:size-7" />
            ) : (
              <ChevronDown className="ms-1 stroke-[1.5] size-5 2xl:size-7" />
            )}
          </HeaderButton>

          {whichMenuExpanded ==='settings' && (
            <div className="absolute flex justify-center border top-full right-0 bg-white bg-opacity-90 rounded-xl p-3 mt-1 ">
              <ul className="whitespace-nowrap">
                <Link
                  to="/"
                  className=" hover:text-blue-600 my-2"
                >
                  <li>- English</li>
                </Link>
                <Link
                  to="/"
                  className=" hover:text-blue-600 my-2"
                >
                  <li>- Japanese</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
        <CTAButton className="flex-shrink-0">
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
