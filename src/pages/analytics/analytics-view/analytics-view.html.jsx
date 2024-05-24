
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../../components/elements/ui/dropdown";
import { Heading2, Heading3 } from "../../../components/elements/ui/headings";
import { Text } from "../../../components/elements/ui/text";
import Breadcrumb from "../../../components/elements/ui/breadcrumb";
import { Button } from "../../../components/elements/ui/button";

function AnalyticsViewHtml() {

  const [selectedRange, setSelectedRange] = useState('Today');

  return (<>
    <div>
      <div className="py-3 px-6 md:px-14 ">
        <Breadcrumb routesList={[{ name: "Analytics", path: "/analytics" }, { name: "zhub.app", path: "#" }]} />
        <div className="flex justify-between pb-2 border-b-2">
          <div className="flex gap-x-3 items-center">
            <img src="assets/images/icons/website.svg" className="w-7 h-7" />
            <Heading2 className="mb-0">zhub.app</Heading2>
            <div className="ms-12 text-sm m-0 p-0 mt-1 flex gap-2 align-middle">
              <Text className="w-2 h-2 bg-green-500 rounded-full mt-1.5">  </Text>
              <Text className="text-gray-400 font-medium">
                12 visitors online
              </Text>
            </div>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="p-2 px-3 border boder-r-0 w-56">
                <div className="flex justify-between w-full items-center">
                  <Text>
                    {selectedRange}
                  </Text>
                  <div>
                    <img src="assets/images/icons/down-arrow.svg" className="w-6 h-6" />
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {["Today", "Yesterday", "Last 7 days", "Last 15 days", "Last 1 month", "All Time"].map((item, index) => {
                  return (<DropdownMenuItem key={index} onClick={() => { setSelectedRange(item); }}>{item}</DropdownMenuItem>)
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>


        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mt-12 my-auto px-0 md:px-6">

          <div className="bg-gray-100 w-full px-6 py-3 rounded">
            <Text className="text-sm">
              Unique Visitors
            </Text>
            <div className="flex w-full justify-between items-center">
              <Heading2 className="mt-4 text-gray-800">
                12
              </Heading2>
              <Text className="text-sm mt-4 text-gray-500">
                ~ 36%
              </Text>
            </div>
          </div>

          <div className="bg-gray-100 w-full px-6 py-3 rounded">
            <Text className="text-sm">
              Total Visits
            </Text>
            <div className="flex w-full justify-between items-center">
              <Heading2 className="mt-4">
                26
              </Heading2>
              <Text className="text-sm mt-4">
                ~ 54%
              </Text>
            </div>
          </div>

          <div className="bg-gray-100 w-full px-6 py-3 rounded">
            <Text className="text-sm">
              Total Page Loads
            </Text>
            <div className="flex w-full justify-between items-center">
              <Heading2 className="mt-4">
                35
              </Heading2>
              <Text className="text-sm mt-4">
                ~ 76%
              </Text>
            </div>
          </div>

          <div className="bg-gray-100 w-full px-6 py-3 rounded">
            <Text className="text-sm">
              Visit Duration
            </Text>
            <div className="flex w-full justify-between items-center">
              <Heading2 className="mt-4">
                28s
              </Heading2>
              <Text className="text-sm mt-4">
                ~ 42%
              </Text>
            </div>
          </div>

          <div className="px-6 py-3 w-full">
            <Text>
              <span className="text-sm">Avg. page loading time: </span>2.6 mins
            </Text>
            <Button className="px-3">Check Now</Button>
          </div>
        </div>

        <div className="mt-12 px-0 md:px-6">
          <div className="w-full h-96 bg-gray-100 rounded-md p-5 px-8">
            <Heading3>
              Graph
            </Heading3>
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-y-6 md:gap-y-0">
          <div className="p-0 md:p-6 ">
            <div className="w-full h-96 bg-gray-100 rounded-md p-5 px-8">
              <Heading3>
                Top Sources
              </Heading3>
            </div>
          </div>

          <div className="p-0 md:p-6 ">
            <div className="w-full h-96 bg-gray-100 rounded-md p-5 px-8">
              <Heading3>
                Top Pages Visited
              </Heading3>
            </div>
          </div>

          <div className="p-0 md:p-6 ">
            <div className="w-full h-96 bg-gray-100 rounded-md p-5 px-8">
              <Heading3>
                Based On Locations
              </Heading3>
            </div>
          </div>

          <div className="p-0 md:p-6 ">
            <div className="w-full h-96 bg-gray-100 rounded-md p-5 px-8">
              <Heading3>
                Device Based Visits
              </Heading3>
            </div>
          </div>

        </div>

      </div>
    </div>
  </>)
}

export default AnalyticsViewHtml;