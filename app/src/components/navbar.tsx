import logo from "@/assets/eletus-logo.jpg";
import { CTAButton, HeaderButton } from "@/components/button";
import { ChevronDown } from "lucide-react";

export function Navbar() {
  return (
    <div className="flex w-full py-3 px-20">
      <HeaderButton className="text-left flex items-center">
        <img src={logo} alt="" className=" inline h-smLogo bg-opacity-0 rounded" />
        <div className="ps-3 leading-none">
          <strong className="font-notojp">Eletus株式会社</strong><br />
          <span className="font-space text-xs uppercase text-gray-500 text-capital">Personal Computer Ideal / AI Era</span>
        </div>
      </HeaderButton>
      <div className="ml-auto gap-3 flex">
          <HeaderButton>Features</HeaderButton>
          <HeaderButton>About Asagami</HeaderButton>
          <HeaderButton className="flex items-center">Settings<ChevronDown className="ms-1" size={14}/></HeaderButton>
          <CTAButton>Contact Us</CTAButton>
      </div>

    </div>
  );
}
