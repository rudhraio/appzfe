import { Link } from "react-router-dom";
import { Heading2, Heading3 } from "../../components/elements/ui/headings";
import { Text } from "../../components/elements/ui/text";

function DashboardHTML() {
  return (<>
    <section className="mt-16">
      <div className="border-b-2 py-6 px-6 md:px-32">
        <Heading2 className="mb-0">Dashboard</Heading2>
      </div>
      <div className="flex flex-row px-6 md:px-32 gap-6">
        <div className="xl:basis-2/3 basis-full p-2 ">
          <Heading3 className="mt-6 mb-8">
            Go To
          </Heading3>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6">
            <Link to="/analytics" className="flex flex-row px-8 py-4 gap-6 items-center bg-gray-100 rounded hover:scale-105 transition max-w-[30rem]">
              <div className="basis-1/3">
                <img src="assets/images/icons/analytics.svg" alt="analytics icon" className="h-full" />
              </div>
              <div lassName="basis-2/3">
                <div className="">
                  <div className="flex flex-row justify-between items-start gap-3 mb-2 ">
                    <div>
                      <Text className="font-medium text-xl mb-2">Analytics</Text>
                      <Text className="max-w-60 text-xs">This tools helps in page analytics and also to see your website performance in real time.</Text>
                    </div>
                    <div>
                      <img src="assets/images/icons/link.svg" alt="link icon" className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/forms" className="flex flex-row px-8 py-4 gap-6 items-center bg-gray-100 rounded hover:scale-105 transition max-w-[30rem]">
              <div className="basis-1/3">
                <img src="assets/images/icons/forms.svg" alt="analytics icon" className="h-full" />
              </div>
              <div lassName="basis-2/3">
                <div className="">
                  <div className="flex flex-row justify-between items-start gap-3 mb-2 ">
                    <div>
                      <Text className="font-medium text-xl mb-2">Forms</Text>
                      <Text className="max-w-60 text-xs">This tools helps in creating custom forms to collect data from users. </Text>
                    </div>
                    <div>
                      <img src="assets/images/icons/link.svg" alt="link icon" className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/articles" className="flex flex-row px-8 py-4 gap-6 items-center bg-gray-100 rounded hover:scale-105 transition max-w-[30rem]">
              <div className="basis-1/3">
                <img src="assets/images/icons/articles.svg" alt="analytics icon" className="h-full" />
              </div>
              <div lassName="basis-2/3">
                <div className="">
                  <div className="flex flex-row justify-between items-start gap-3 mb-2 ">
                    <div>
                      <Text className="font-medium text-xl mb-2">Articles</Text>
                      <Text className="max-w-60 text-xs">This tools helps in creating your own blog page or article’s for better ranking in SEO.</Text>
                    </div>
                    <div>
                      <img src="assets/images/icons/link.svg" alt="link icon" className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/scheduler" className="flex flex-row px-8 py-4 gap-6 items-center bg-gray-100 rounded hover:scale-105 transition max-w-[30rem]">
              <div className="basis-1/3">
                <img src="assets/images/icons/schedule.svg" alt="analytics icon" className="h-full" />
              </div>
              <div lassName="basis-2/3">
                <div className="">
                  <div className="flex flex-row justify-between items-start gap-3 mb-2 ">
                    <div>
                      <Text className="font-medium text-xl mb-2">Scheduling</Text>
                      <Text className="max-w-60 text-xs">This tools helps in scheduling meetings easier than ever before. </Text>
                    </div>
                    <div>
                      <img src="assets/images/icons/link.svg" alt="link icon" className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/finance" className="flex flex-row px-8 py-4 gap-6 items-center bg-gray-100 rounded hover:scale-105 transition max-w-[30rem]">
              <div className="basis-1/3">
                <img src="assets/images/icons/invoice.svg" alt="analytics icon" className="h-full" />
              </div>
              <div lassName="basis-2/3">
                <div className="">
                  <div className="flex flex-row justify-between items-start gap-3 mb-2 ">
                    <div>
                      <Text className="font-medium text-xl mb-2">Invoice</Text>
                      <Text className="max-w-60 text-xs">This tools helps in creating quoatation & invoices for your business. </Text>
                    </div>
                    <div>
                      <img src="assets/images/icons/link.svg" alt="link icon" className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/ecom" className="flex flex-row px-8 py-4 gap-6 items-center bg-gray-100 rounded hover:scale-105 transition max-w-[30rem]">
              <div className="basis-1/3">
                <img src="assets/images/icons/ecom.svg" alt="analytics icon" className="h-full" />
              </div>
              <div lassName="basis-2/3">
                <div className="">
                  <div className="flex flex-row justify-between items-start gap-3 mb-2 ">
                    <div>
                      <Text className="font-medium text-xl mb-2">E-commerce</Text>
                      <Text className="max-w-60 text-xs">This tools helps you to sell your goods or services online. </Text>
                    </div>
                    <div>
                      <img src="assets/images/icons/link.svg" alt="link icon" className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

        </div>

        <div className="basis-1/3 p-2 max-w-lg xl:block hidden">
          <div className="ps-4">
            <Heading3 className="mt-6 mb-8 flex flex-row justify-between items-center">
              <span>
                Notifications
              </span>
              <Link to="/notifications" className="text-xs cursor-pointer">
                View all
              </Link>
            </Heading3>
          </div>

          <div className="flex flex-col border-l-2 h-full max-h-[36rem] overflow-scroll ps-4 -mt-4 pt-2 gap-3">
            <div className="flex flex-row gap-4">
              <div className="w-16 h-16 rounded-xl bg-gray-300"></div>
              <div className="cursor-pointer">
                <Text className="font-semibold !mb-0">Domain Added</Text>
                <Text className="text-sm !mb-0">New domain zhub.app has been added.</Text>
                <Text className="text-xs font-medium text-gray-400 !mb-0">14:02, 29 Apr 2024</Text>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  </>)
}

export default DashboardHTML;