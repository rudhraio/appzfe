import { createBrowserRouter } from "react-router-dom";
import AuthGuard from "../utils/auth-guard";
import SignIn from "./auth/signin/signin";
import SignUp from "./auth/signup/signup";
import ForgotPassword from "./auth/forgot-password/forgot-password";
import ResetPassword from "./auth/reset-password/reset-password";

const router = createBrowserRouter([
    // Protected Routes
    {
        path: "/",
        element: "Home",
        loader() { return AuthGuard() },
    },

    // Un Protected Routes
    {
        path: "/auth",
        index: SignIn,
        loader() { return AuthGuard(false) },
        children: [
            {
                path: "signin",
                Component: SignIn
            },
            {
                path: "signup",
                Component: SignUp
            },
            {
                path: "forgot-password",
                Component: ForgotPassword
            },
            {
                path: "reset-password",
                Component: ResetPassword
            },
        ]
    },


    // handle 404 pages
    {
        path: "*",
        loader() { return AuthGuard() },
        element: `404 Page: Page Not Found`
    }
])

export default router;