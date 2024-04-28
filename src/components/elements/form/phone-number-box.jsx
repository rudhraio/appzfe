import { InputBox } from "./input-box";
import { countryJson } from "../../../utils/data/country";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown";
import { useState } from "react";


function PhoneNumberBox({ ...props }) {

    const [selectedCCode, setSelectedCCode] = useState('+1');

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.preventDefault(); // Prevent default action of arrow keys
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
                            return (<DropdownMenuItem key={index} onClick={() => { setSelectedCCode(item.code) }}>{item.country}  {item.code}</DropdownMenuItem>)
                        })}
                    </DropdownMenuContent>
                </DropdownMenu>
                <InputBox type="number" className="z-10 w-full" onKeyDown={handleKeyDown}  {...props} />
            </div>

        </>
    )
}


export default PhoneNumberBox;