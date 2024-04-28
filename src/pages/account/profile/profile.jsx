import { useEffect, useState } from "react";
import ProfileHTML from "./profile.html";
import { profileInfoAPI } from "../../../api-client/account/profile.api";

function Profile() {

    const [userInfo, setUserInfo] = useState({});


    useEffect(() => {


        fetchUserData();


    }, [])

    async function fetchUserData() {
        const response = await profileInfoAPI();
        const { data } = response;
        if (data.status !== 200) {
            return;
        }
        console.log("Data", data);
    }

    return <ProfileHTML />
}

export default Profile;