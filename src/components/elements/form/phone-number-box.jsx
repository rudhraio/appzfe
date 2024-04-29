import { InputBox } from "./input-box";
import { countryJson } from "../../../utils/data/country";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown";
import { useEffect, useState } from "react";


function PhoneNumberBox({ ccvalue = 0, onccChange, ...props }) {

  const [selectedCCode, setSelectedCCode] = useState(ccvalue !== 0 ? `+${ccvalue}` : "+1");

  useEffect(() => {
    setSelectedCCode(ccvalue !== 0 ? `+${ccvalue}` : "+1");
  }, [ccvalue]);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
    }
  }

  return (
    <>
      <div className="flex flex-row">
        <DropdownMenu position="left-0">
          <DropdownMenuTrigger className="p-2 ps-4 pe-8 border boder-r-0 w-20">
            {selectedCCode}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {countryJson.map((item, index) => {
              return (<DropdownMenuItem key={index} onClick={() => { setSelectedCCode(item.code); onccChange({ target: { value: item.ccnumber } }) }}>{item.country}  {item.code}</DropdownMenuItem>)
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        <InputBox type="number" className="z-10 w-full" onKeyDown={handleKeyDown}  {...props} />
      </div>

    </>
  )
}


export default PhoneNumberBox;