
import http from "../http";
import { URLS } from "../urls";

async function signUpAPI(payload) {
    return await http.post(URLS.signup, payload);;
}

export default signUpAPI;