import { useNavigate } from "react-router-dom"
import { Button } from "../../components/elements/ui/button"

function ComingSoonHtml() {
    const navigator = useNavigate();
    return (<>
        <div className="m-48">
            <div className="min-w-96">

                <h2 className="text-7xl font-bold">Coming Soon...</h2>
                <p className="mt-3 text-lg font-thin ">We are trying our best to provide you this service as soon as possible.</p>
            </div>
            <Button className="px-3 mt-6" onClick={() => { navigator("/") }}>Back To Home</Button>
        </div>
    </>)
}

export default ComingSoonHtml