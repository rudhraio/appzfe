import { Link } from "react-router-dom";
import { InputBox } from "../../../components/elements/form/input-box";
import { Button } from "../../../components/elements/ui/button";
import { Heading2, Heading3 } from "../../../components/elements/ui/headings";
import { Text } from "../../../components/elements/ui/text";
import Breadcrumb from "../../../components/elements/ui/breadcrumb";

function AnalyticsHomeHtml() {
  return (<>
    <div className="py-3 px-6 md:px-14 ">
      <Breadcrumb routesList={[{ name: "Analytics", path: "#" }]} />
      <div className="flex justify-between pb-2 border-b-2">
        <div className="">
          <Heading2 className="mb-0">My Websites</Heading2>
        </div>
        <div>
          <Button className="px-3">+ Add New</Button>
        </div>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
        <div className="bg-gray-100 w-full rounded cursor-pointer hover:shadow-xl">
          <Link to="zhub.app" className="flex px-5 py-6 gap-x-3">
            <div>
              <img src="assets/images/icons/website.svg" className="w-7 h-7" />
            </div>
            <div className="w-full">
              <div className="flex justify-between w-full">
                <div>
                  <Heading3 className="-mt-0.5 p-0">zhub.app</Heading3>
                </div>
              </div>
              <div className="w-full h-24 flex justify-center my-auto">
                graph
              </div>
              <div className="mt-3">
                <Text className="text-gray-500">
                  <b className="bold">13</b> visitors in last 24h
                </Text>
              </div>
            </div>
            <div>
              <img src="assets/images/icons/open-link.svg" className="w-5 h-5 mt-1" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  </>)
}

export default AnalyticsHomeHtml;