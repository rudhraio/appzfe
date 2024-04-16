import { Link } from "react-router-dom";
import { Heading3 } from "../elements/ui/headings";

function AuthHeader() {
    return (<>
        <header className="flex fixed top-0 pt-6 pb-4 md:px-14 px-6 w-full justify-between shadow bg-white z-10">
            <Link to="/" className=" flex flex-row gap-x-2 items-center">
                <img src="./assets/images/logo.png" alt="logo" className="w-6 h-6 mb-1" />
                <Heading3>
                    Appz
                </Heading3>
            </Link>
            <div>
                <Link to="/support" className="p-1 px-2 bg-white border text-black rounded-lg text-sm font-medium">
                    Support
                </Link>
            </div>
        </header>
    </>)
}

export default AuthHeader;