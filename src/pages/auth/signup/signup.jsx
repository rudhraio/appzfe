import { useNavigate } from "react-router-dom";
import signUpAPI from "../../../api-client/auth/signup.api";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../../utils/helpers/regex";
import { useForm } from "../../../utils/hooks/useForm";
import SignUpHTML from "./signup.html";

function SignUp() {

    const navigate = useNavigate();

    const initialValues = {
        name: {
            value: '',
            required: true,
            pattern: "",
            errorMessage: 'Please enter valid data'
        },
        email: {
            value: '',
            required: true,
            pattern: EMAIL_REGEX,
            errorMessage: 'Please enter a valid email'
        },
        password: {
            value: '',
            required: true,
            pattern: PASSWORD_REGEX,
            errorMessage: 'Please enter valid data'
        },
        agree_to_terms: {
            value: true,
            required: true,
            pattern: "",
            errorMessage: 'Please enter valid data'
        }
    }

    const formHandler = useForm(initialValues);

    async function onSubmit(values) {

        if (!formHandler.isFormValid()) {
            return;
        }

        const response = await signUpAPI(values);
        const { data } = response;
        if (data.status !== 201) {
            return;
        }


        const userdata = data.data;
        localStorage.setItem("access", userdata?.access);
        localStorage.setItem("refresh", userdata?.refresh);
        localStorage.setItem("roleaccess", userdata?.refresh);

        delete userdata.access;
        delete userdata.refresh;
        delete userdata.refresh;
        localStorage.setItem("user", JSON.stringify(userdata));

        navigate("/dashboard");
    }

    return <SignUpHTML
        formHandler={formHandler}
        onSubmit={onSubmit}
    />;
}

export default SignUp;