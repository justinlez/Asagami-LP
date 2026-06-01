import logo from "@/assets/eletus-logo.jpg";
import { CTAButton, HeaderButton } from "@/components/button";
import { useHover } from "@/lib/utils";
import { Navigate } from "@tanstack/react-router";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isSettingsExpanded, setSettingsExpanded] = useState(false);
  const { customRef, hovering } = useHover()
  return (
    <div className="flex w-full py-3 px-20">
      <HeaderButton className="text-left flex items-center">
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
      <div className="ml-auto gap-3 flex">
        <HeaderButton>Features</HeaderButton>
        <HeaderButton>About Asagami</HeaderButton>
        <div ref={customRef} className="relative">
          <HeaderButton className="flex items-center" onClick={()=>setSettingsExpanded(!isSettingsExpanded)}>
            Settings
            {(hovering||isSettingsExpanded) ? <ChevronUp className="ms-1" size={15}/> : <ChevronDown className="ms-1" size={15}/>}
          </HeaderButton>

          {(hovering||isSettingsExpanded) && (
            <div className="absolute flex justify-center border min-w-full bg-white rounded pt-2 pb-3 px-4">
              <ul className="whitespace-nowrap">
                <li>- <a href="https://www.eletus.co.jp/" className="hover:bg-gray-200 visited:text-purple-600">Option 1</a></li>
                <li>- <a href="https://www.eletus.co.jp/" className="hover:text-blue-800 hover:bg-gray-200 visited:text-purple-600">Option 2</a></li>
              </ul>
            </div>
          )}
        </div>
        <CTAButton><a href="https://docs.google.com/forms/d/e/1FAIpQLSfjsScFSVHqQLvXsUbW_J84qFjJsA8cUXuR1t0g6iKcaVAu7w/viewform">Contact Us</a></CTAButton>
        <div className=""></div>
      </div>
    </div>
  );
}
