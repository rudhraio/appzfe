import { Outlet } from "react-router-dom";
import AuthHeader from "../../components/layout/auth-header";

function AuthPage() {
    return (<>
        <AuthHeader />
        <Outlet />
    </>)
}

export default AuthPage;