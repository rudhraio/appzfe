import http from "../http";
import { URLS } from "../urls";


export async function changePasswordAPI(values) {
    return await http.put(URLS.changepassword, values);
}
