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
import ComingSoonHtml from "./coming-soon/comingSoon.html";
import Notifications from "./notifications/notifications";
import PageNotFound from "./page-not-found/pageNotFound";

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
        Component: Notifications
      },
      {
        path: "analytics",
        Component: ComingSoonHtml
      },
      {
        path: "forms",
        Component: ComingSoonHtml
      },
      {
        path: "articles",
        Component: ComingSoonHtml
      },
      {
        path: "scheduler",
        Component: ComingSoonHtml
      },
      {
        path: "finance",
        Component: ComingSoonHtml
      },
      {
        path: "ecom",
        Component: ComingSoonHtml
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
    Component: ComingSoonHtml
  },


  // handle 404 pages
  {
    path: "*",
    loader() { return AuthGuard() },
    Component: PageNotFound
  }
])

export default router;