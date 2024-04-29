import http from "../http";
import { URLS } from "../urls";


export async function profileInfoAPI() {
    return await http.get(URLS.profileinfo);
}

export async function profileUpdateAPI(payload) {
    return await http.put(URLS.profileupdate, payload);
}