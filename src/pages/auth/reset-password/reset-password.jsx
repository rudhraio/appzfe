import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ResetPasswordHTML from "./reset-password.html";
import { PASSWORD_REGEX } from "../../../utils/helpers/regex";
import { useForm } from "../../../utils/hooks/useForm";
import resetPasswordAPI from "../../../api-client/auth/reset-password.api";

function ResetPassword() {
    const location = useLocation();
    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState({
        email: "",
        code: ""
    })

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const code = queryParams.get('code');
        const email = queryParams.get('email');
        if (!code || !email) {
            navigate("/auth/signin");
            return
        } else {
            setUserDetails({ email, code })
            navigate(location.pathname);
        }
    }, [])




    const [showMessage, setShowMessage] = useState({
        show: false,
        error: false,
        message: "Password update successfull"
    })

    const initialValues = {

        password: {
            value: '',
            required: true,
            pattern: PASSWORD_REGEX,
            errorMessage: 'Please enter a valid email'
        }
    }

    const formHandler = useForm(initialValues);



    async function onSubmit(values) {
        if (!formHandler.isFormValid()) {
            return;
        }


        const response = await resetPasswordAPI({ ...values, email: userDetails.email, code: userDetails.code });
        const { data } = response;
        if (data.status !== 200) {
            setShowMessage({
                error: true,
                show: true,
                message: data.message
            });
            return;
        }

        setShowMessage({
            error: false,
            show: true,
            message: data.message
        });

        setTimeout(() => {
            navigate("/auth/signin")
        }, 3000)

    }

    return <ResetPasswordHTML
        email={userDetails.email}
        formHandler={formHandler}
        onSubmit={onSubmit}
        showMessage={showMessage}
    />;
}

export default ResetPassword;