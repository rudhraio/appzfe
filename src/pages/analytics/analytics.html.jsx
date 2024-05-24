import { Outlet } from "react-router-dom";

function AnalyticsHtml() {
    return (<>
        <section className="mt-16">
            <Outlet />
        </section>
    </>)
}


export default AnalyticsHtml;
