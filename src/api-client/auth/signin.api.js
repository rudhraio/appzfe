
import http from "../http";
import { URLS } from "../urls";

async function signInAPI(payload) {
    return await http.post(URLS.signin, payload);
}

export default signInAPI;