import logo from "@/assets/eletus-logo.jpg";
import { CTAButton, HeaderButton } from "./Button";

export function Navbar() {
  return (
    <div className="flex w-full items-center py-3 ">
      <img src={logo} alt="" className="ms-6 inline h-smLogo bg-opacity-0 rounded" />
      <div className="ml-auto mr-14 justify-end gap-3 flex">
          <HeaderButton>Navigation</HeaderButton>
          <HeaderButton>Features</HeaderButton>
          <CTAButton>Contact Us</CTAButton>
      </div>

    </div>
  );
}
