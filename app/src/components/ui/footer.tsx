import { Copyright } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="">
      <hr className="border-gray-300" />
      <div className="flex items-center min-h-[3vh] py-[2%] w-[90vw] mx-auto justify-between text-gray-500 text-sm 2xl:text-base">
        <div className="flex items-center gap-1">
          <Copyright className="flex-inline items-center" size={20} /> Eletus
          Inc.
        </div>
        <div className="flex flex-wrap gap-x-12 w-auto">
          <Link
            to="https://www.eletus.co.jp/privacy-policy-2/"
            target="_blank"
            className="hover:text-leaf"
          >
            Privacy Policy
          </Link>
          <Link
            to="https://www.eletus.co.jp/act-on-specified-commercial-transactions/"
            target="_blank"
            className="hover:text-leaf text-wrap"
          >
            Notation based on the Act on Specified Commercial Transactions
          </Link>
        </div>
      </div>
    </div>
  );
}
