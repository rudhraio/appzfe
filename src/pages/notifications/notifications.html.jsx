import { useState } from "react";
import { Heading2 } from "../../components/elements/ui/headings";
import { Outlet } from "react-router-dom";
import { Text } from "../../components/elements/ui/text";

function NotificationsHtml() {

    const [activeButton, setActiveButton] = useState('all');

    return (
        <section className="mt-16 ">
            <div className="border-b-2 py-6 px-6 md:px-32">
                <Heading2 className="mb-0">Notifications</Heading2>
            </div>
            <div className="flex flex-row mt-6 px-6 md:px-32 justify-between gap-x-16">
                <div className="basis-1/5 flex flex-col gap-3 pt-2">
                    <Text className={` hover:bg-gray-100 p-2 cursor-pointer ${activeButton === 'all' ? "font-medium" : "font-light"} `} onClick={() => { setActiveButton("all") }}>All</Text>
                    <Text className={` hover:bg-gray-100 p-2 cursor-pointer ${activeButton === 'activities' ? "font-medium" : "font-light"} `} onClick={() => { setActiveButton("activities") }}>Only activities</Text>
                    <hr />
                    <Text className="font-bold uppercase text-gray-400">Products</Text>
                    <Text className={` hover:bg-gray-100 p-2 cursor-pointer ${activeButton === 'analytics' ? "font-medium" : "font-light"} `} onClick={() => { setActiveButton("analytics") }}>Analytics</Text>
                    <Text className={` hover:bg-gray-100 p-2 cursor-pointer ${activeButton === 'forms' ? "font-medium" : "font-light"} `} onClick={() => { setActiveButton("forms") }}>Forms</Text>
                    <Text className={` hover:bg-gray-100 p-2 cursor-pointer ${activeButton === 'articles' ? "font-medium" : "font-light"} `} onClick={() => { setActiveButton("articles") }}>Articles</Text>
                    <Text className={` hover:bg-gray-100 p-2 cursor-pointer ${activeButton === 'scheduler' ? "font-medium" : "font-light"} `} onClick={() => { setActiveButton("scheduler") }}>Scheduler</Text>
                    <Text className={` hover:bg-gray-100 p-2 cursor-pointer ${activeButton === 'finance' ? "font-medium" : "font-light"} `} onClick={() => { setActiveButton("finance") }}>Finance</Text>
                    <Text className={` hover:bg-gray-100 p-2 cursor-pointer ${activeButton === 'ecom' ? "font-medium" : "font-light"} `} onClick={() => { setActiveButton("ecom") }}>E-commerce</Text>

                </div>
                <div className="basis-4/5">
                    <div className="flex justify-between">
                        <div>
                            Today
                        </div>
                        <div>
                            Mark all as read
                        </div>
                    </div>
                    <hr className="my-3" />
                    <div className="flex flex-col h-full max-h-[36rem] overflow-scroll ps-4 -mt-4 pt-2 gap-4">
                        <div className="flex flex-row gap-4 mt-3">
                            <div className="w-16 h-16 rounded-xl bg-gray-300"></div>
                            <div className="cursor-pointer">
                                <Text className="font-semibold !mb-0">Domain Added</Text>
                                <Text className="text-sm !mb-0">New domain zhub.app has been added.</Text>
                                <Text className="text-xs font-medium text-gray-400 !mb-0">14:02, 29 Apr 2024</Text>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 mt-3">
                            <div className="w-16 h-16 rounded-xl bg-gray-300"></div>
                            <div className="cursor-pointer">
                                <Text className="font-semibold !mb-0">New Form Submission</Text>
                                <Text className="text-sm !mb-0">New submission of form.</Text>
                                <Text className="text-xs font-medium text-gray-400 !mb-0">10:42, 28 Apr 2024</Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotificationsHtml;