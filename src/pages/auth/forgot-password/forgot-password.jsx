import { useState } from "react";

import { EMAIL_REGEX } from "../../../utils/helpers/regex";
import { useForm } from "../../../utils/hooks/useForm";
import ForgotPasswordHTML from "./forgot-password.html";
import { useNavigate } from "react-router-dom";
import forgotPasswordAPI from "../../../api-client/auth/forgot-password.api";

function ForgotPassword() {
    const navigate = useNavigate();
    const [showMessage, setShowMessage] = useState({
        show: false,
        error: false,
        message: "You will receive a reset link on your email."
    })

    const initialValues = {
        email: {
            value: '',
            required: true,
            pattern: EMAIL_REGEX,
            errorMessage: 'Please enter a valid email'
        }
    }

    const formHandler = useForm(initialValues);
    async function onSubmit(values) {
        if (!formHandler.isFormValid()) {
            return;
        }

        const response = await forgotPasswordAPI(values);
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
        }, 5000)
    }

    return <ForgotPasswordHTML
        formHandler={formHandler}
        onSubmit={onSubmit}
        showMessage={showMessage}
    />;
}

export default ForgotPassword;