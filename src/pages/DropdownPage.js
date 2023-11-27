
import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage () {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    } 

    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Yellow', value: 'yellow' },
        { label: 'Orange', value: 'orange' }
    ];

    return (
        <div className="app">
            <Dropdown onChange={handleSelect} value={selection} options={options}/>
        </div>
    );
}

export default DropdownPage;
