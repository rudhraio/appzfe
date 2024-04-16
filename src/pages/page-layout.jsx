import { Outlet } from "react-router-dom";
import Header from "../components/layout/header";

function PageLayout() {
    return (<>
        <Header />
        <Outlet />
    </>)
}

export default PageLayout;