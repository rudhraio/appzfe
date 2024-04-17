import http from "../http";
import { URLS } from "../urls";


async function resetPasswordAPI(payload) {
    return await http.post(URLS.resetpassword + '?accesscode=true', payload);
}

export default resetPasswordAPI;