import { Copyright } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer(){

    return (
        <div>
            <hr className="border-gray-300" />
            <div className="flex items-center h-[3vh] py-[3%]  w-[90vw] mx-auto justify-between text-gray-500 text-sm 2xl:text-base">
                <div className="flex items-center gap-1"><Copyright className="flex-inline items-center" size={20}/> Eletus Inc.</div>
                <div className="flex gap-12 w-auto">
                    <Link to='https://www.eletus.co.jp/privacy-policy-2/' target="_blank" className='hover:text-leaf'>Privacy Policy</Link>
                    <Link to='https://www.eletus.co.jp/act-on-specified-commercial-transactions/' target="_blank" className='hover:text-leaf'>Disclosure based on the Specified Commercial Transactions Act</Link>
                </div>
            </div>
        </div>
    )
}