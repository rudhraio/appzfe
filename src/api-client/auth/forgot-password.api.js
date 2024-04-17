import http from "../http";
import { URLS } from "../urls";


async function forgotPasswordAPI(payload) {
    return await http.post(URLS.resetpassword, payload);
}

export default forgotPasswordAPI;