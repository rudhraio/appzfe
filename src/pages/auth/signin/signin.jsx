import { useNavigate } from "react-router-dom";
import SignInHTML from "./signin.html";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../../utils/helpers/regex";
import { useForm } from "../../../utils/hooks/useForm";
import signInAPI from "../../../api-client/auth/signin.api";

function SignIn() {

    const navigate = useNavigate();

    const initialValues = {
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
    }

    const formHandler = useForm(initialValues);

    async function onSubmit(values) {

        if (!formHandler.isFormValid()) {
            return;
        }

        const response = await signInAPI(values);
        const { data } = response;
        if (data.status !== 200) {
            return;
        }

        console.log("response", response);


        const userdata = data.data;

        const expires = new Date();
        expires.setDate(expires.getDate() + 5);
        // document.cookie = `access=${userdata?.access}; expires=${expires.toUTCString()}; path=/;`;
        // document.cookie = `role=${userdata?.roleaccess}; expires=${expires.toUTCString()}; path=/;`;
        // document.cookie = `refresh=${userdata?.refresh}; expires=${expires.toUTCString()}; path=/;`;

        // localStorage.setItem("access", userdata?.access);
        // localStorage.setItem("refresh", userdata?.refresh);
        // localStorage.setItem("roleaccess", userdata?.roleaccess);

        delete userdata.access;
        delete userdata.refresh;
        delete userdata.refresh;
        localStorage.setItem("user", JSON.stringify(userdata));

        navigate("/dashboard");
    }

    return <SignInHTML
        formHandler={formHandler}
        onSubmit={onSubmit}
    />
}

export default SignIn;