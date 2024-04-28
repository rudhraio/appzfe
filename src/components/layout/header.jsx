import { Link, useNavigate } from "react-router-dom";
import { Heading3 } from "../elements/ui/headings";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../elements/ui/dropdown";
import { Text } from "../elements/ui/text";
import { useEffect, useState } from "react";

function Header() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setUserInfo(user);
    }, [])

    function logout() {

        var cookies = document.cookie.split(";");

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        }
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
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>
                            <div className="flex flex-row gap-3 items-center">
                                <div className="w-12 h-12 rounded-full bg-gray-700"></div>
                                <div>
                                    <Heading3 className="mb-0 capitalize">
                                        {userInfo?.fname} {userInfo?.lname}
                                    </Heading3>
                                    <Text className="text-xs">
                                        {userInfo?.email}
                                    </Text>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => { navigate("/account/profile"); }}>
                            <div className="flex w-full justify-between items-center">
                                <Text>Account Settings</Text>
                                <img src="assets/images/icons/settings.svg" alt="settings icon" className="w-5 h-5" />
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => { logout() }}>
                            <div className="flex w-full justify-between items-center">
                                <Text> Log out</Text>
                                <img src="assets/images/icons/logout.svg" alt="settings icon" className="w-5 h-5" />
                            </div>

                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

        </header>
    </>)
}

export default Header;