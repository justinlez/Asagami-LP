import { Copyright } from "lucide-react";

export function Footer(){
    return (
        <div>
            <hr className="border-gray-300" />
            <div className="flex items-center h-[3vh] py-[3%]  w-[90vw] mx-auto justify-between text-gray-600 text-sm 2xl:text-base">
                <div className="flex items-center gap-1"><Copyright className="flex-inline items-center" size={20}/> Eletus Inc.</div>
                <div className="flex gap-12 w-auto">
                    <p className="flex">Privacy Policy</p>
                    <p className="flex w-auto">Disclosure based on the Specified Commercial Transactions Act</p>
                </div>
            </div>
        </div>
    )
}