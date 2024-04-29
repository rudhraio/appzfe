import { useEffect, useState } from "react";
import ProfileHTML from "./profile.html";
import { profileInfoAPI, profileUpdateAPI } from "../../../api-client/account/profile.api";
import { useForm } from "../../../utils/hooks/useForm";

function Profile() {

    const [userInfo, setUserInfo] = useState({});
    const formHandler = useForm({});

    useEffect(() => {
        fetchUserData();
    }, [])

    async function fetchUserData() {
        const response = await profileInfoAPI();
        const { data } = response;
        if (data.status !== 200) {
            return;
        }
        setUserInfo(data.data);
    }

    useEffect(() => {
        if (userInfo?.email) {
            initializeForm()
        }
    }, [userInfo]);

    function initializeForm() {
        const initialValues = {
            fname: {
                value: userInfo.fname,
                required: true,
                pattern: "",
                errorMessage: 'Please enter valid data'
            },
            lname: {
                value: userInfo.lname,
                required: false,
                pattern: "",
                errorMessage: 'Please enter valid data'
            },
            email: {
                value: userInfo.email,
                required: false,
                pattern: "",
                errorMessage: 'Please enter valid data'
            },
            phonenumber: {
                value: userInfo.phonenumber,
                required: false,
                pattern: "",
                errorMessage: 'Please enter valid data'
            },
            ccode: {
                value: userInfo.ccode,
                required: false,
                pattern: "",
                errorMessage: 'Please enter valid data'
            },
            image: {
                value: userInfo.image,
                required: false,
                pattern: "",
                errorMessage: 'Please enter valid data'
            },
            bio: {
                value: userInfo.bio,
                required: false,
                pattern: "",
                errorMessage: 'Please enter valid data'
            },
            info: {
                value: userInfo.info,
                required: false,
                pattern: "",
                errorMessage: 'Please enter valid data'
            }
        }
        formHandler.updateForm(initialValues);
    }


    async function onSubmit(values) {

        if (!formHandler.isFormValid()) {
            return;
        }

        const response = await profileUpdateAPI(values);
        const { data } = response;
        if (data.status !== 200) {
            return;
        }
        const tempUserdata = JSON.parse(localStorage.getItem("user"));
        localStorage.setItem("user", JSON.stringify({ ...tempUserdata, ...values }));

    }








    return <ProfileHTML formHandler={formHandler} onSubmit={onSubmit} />
}

export default Profile;