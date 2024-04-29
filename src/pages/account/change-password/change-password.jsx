import { changePasswordAPI } from "../../../api-client/account/change-password.api";
import { useForm } from "../../../utils/hooks/useForm";
import ChangePasswordHTML from "./change-password.html";

function ChangePassword() {

    const initialValues = {
        cpwd: {
            value: "",
            required: true,
            pattern: "",
            errorMessage: 'Please enter valid data'
        },
        npwd: {
            value: "",
            required: true,
            pattern: "",
            errorMessage: 'Please enter valid data'
        },
    }

    const formHandler = useForm(initialValues);

    async function onSubmit(values) {

        if (!formHandler.isFormValid()) {
            return;
        }

        const response = await changePasswordAPI(values);
        const { data } = response;
        if (data.status !== 200) {
            return;
        }
        formHandler.resetForm();
    }



    return <ChangePasswordHTML formHandler={formHandler} onSubmit={onSubmit} />
}

export default ChangePassword;