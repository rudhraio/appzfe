import { redirect } from "react-router-dom";

function AuthGuard(enabled = true) {
    const access = localStorage.getItem("access");
    return enabled ? !access ? redirect("/auth/signin") : "" : access ? redirect("/dashboard") : ""
}

export default AuthGuard;