import { createBrowserRouter } from "react-router-dom";
import AuthGuard from "../utils/auth-guard";
import SignIn from "./auth/signin/signin";
import SignUp from "./auth/signup/signup";
import ForgotPassword from "./auth/forgot-password/forgot-password";
import ResetPassword from "./auth/reset-password/reset-password";
import AuthPage from "./auth/auth.page";
import PageLayout from "./page-layout";
import AccountPage from "./account/account.page";
import Profile from "./account/profile/profile";
import ChangePassword from "./account/change-password/change-password";
import Dashboard from "./dashboard/dashboard";

const router = createBrowserRouter([
  // Protected Routes
  {
    path: "/",
    Component: PageLayout,
    loader() { return AuthGuard() },
    children: [
      {
        path: "",
        Component: Dashboard
      },
      {
        path: "dashboard",
        Component: Dashboard
      },
      {
        path: "notifications",
        element: `<p className="mt-36">Welcome to Notifications</p>`
      },
      {
        path: "account",
        Component: AccountPage,
        children: [
          {
            path: "profile",
            Component: Profile
          },
          {
            path: "change-password",
            Component: ChangePassword
          }
        ]
      }
    ]
  },

  // Un Protected Routes
  {
    path: "/auth",
    index: SignIn,
    Component: AuthPage,
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

  {
    path: "/support",
    element: `Support Team`
  },


  // handle 404 pages
  {
    path: "*",
    loader() { return AuthGuard() },
    element: `404 Page: Page Not Found`
  }
])

export default router;