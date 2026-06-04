import { Link } from "react-router-dom";
import { CTAButton } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";

export function NotFound(){
    return (
        <div>
        <Navbar/>
        <div>
            Error 404
            The page you are looking for does not exist.
            Click here to go back
            
                <Link to='/'>
                    <CTAButton>
                        Back to Home Page
                    </CTAButton>
                </Link>
            
        </div>
    </div>
    )
}