import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Heading2 } from "../../components/elements/ui/headings";
import { Text } from "../../components/elements/ui/text";
import Profile from "./profile/profile";
import { useEffect, useState } from "react";

function AccountPage() {

    const [activeButton, setActiveButton] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const { pathname } = location;
        setActiveButton(pathname.split("/")[2]);
    }, [location])

    return (<>
        <section className="mt-16 ">
            <div className="border-b-2 py-6 px-6 md:px-32">
                <Heading2 className="mb-0">Account Settings</Heading2>
            </div>
            <div className="flex flex-row mt-6 px-6 md:px-32 justify-between gap-x-16">
                <div className="basis-1/5 flex flex-col gap-3 pt-2">
                    <Text className={` hover:bg-gray-100 p-2 cursor-pointer ${activeButton === 'profile' ? "font-medium" : "font-light"} `} onClick={() => { navigate("/account/profile") }}>Profile</Text>
                    <Text className={` hover:bg-gray-100 p-2 cursor-pointer ${activeButton === 'change-password' ? "font-medium" : "font-light"} `} onClick={() => { navigate("/account/change-password") }}>Change Password</Text>
                </div>
                <div className="basis-4/5">
                    <Outlet />
                </div>
            </div>
        </section>
    </>)
}

export default AccountPage;