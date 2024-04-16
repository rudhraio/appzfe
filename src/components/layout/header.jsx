import { Link, useNavigate } from "react-router-dom";
import { Heading3 } from "../elements/ui/headings";
import { Button } from "../elements/ui/button";

function Header() {
    const navigate = useNavigate();

    function logout() {
        console.log("hello all")
        localStorage.clear();
        navigate("/auth/signin");
    }

    return (<>
        <header className="flex fixed top-0 pt-6 pb-4 md:px-14 px-6 w-full justify-between shadow bg-white z-10">
            <Link to="/" className=" flex flex-row gap-x-3 items-center">
                <img src="./assets/images/logo.png" alt="logo" className="w-6 h-6 mb-1.5" />
                <Heading3>
                    Appz
                </Heading3>
            </Link>
            <div>
                <Button className="bg-red-400 px-3" onClick={() => { logout() }}>Logout</Button>
            </div>
        </header>
    </>)
}

export default Header;