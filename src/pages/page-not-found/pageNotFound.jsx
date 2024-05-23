import { useNavigate } from "react-router-dom";
import { Button } from "../../components/elements/ui/button";

function PageNotFound() {
    const navigator = useNavigate();
    return (<>
        <div className="m-48">
            <div className="min-w-96">
                <h2 className="text-7xl font-bold">404 Page Not Found</h2>
                <p className="mt-3 text-lg font-thin ">The page you are trying to access does not exists. Please check your URL</p>
            </div>
            <Button className="px-3 mt-6" onClick={() => { navigator("/") }}>Back To Home</Button>
        </div>
    </>)
}

export default PageNotFound;