import { Link } from "react-router-dom";
import { Text } from "./text";

function Breadcrumb({ routesList, ...props }) {
  return (<>
    <div className="flex gap-x-2 items-center mb-6">
      <Link to="/" className="cursor-pointer">
        <img src="assets/images/icons/home.svg" className="w-4 h-4" />
      </Link>
      <Text className="text-sm mt-1">
            >
      </Text>
      {
        routesList.map((item, index) => {
          return <div key={index} className="flex gap-x-2 items-center">
            <Text className={`${index ? "block" : "hidden"}`} >
              /
            </Text>
            <Link to={item.path} className={`text-sm font-light ${routesList.length - 1 !== index ? "px-2 rounded-md bg-gray-300 cursor-pointer" : ""}  text-gray-600`}>
              {item.name}
            </Link>
          </div>
        })
      }
    </div>
  </>)
}

export default Breadcrumb;