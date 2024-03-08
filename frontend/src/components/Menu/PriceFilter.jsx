import { Slider } from "@/components/ui/slider"
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox"
import priceList from "@/temp/prices";

const PriceFilter = () => {

    const [range, setRange] = useState([0, 500]);

    const handleRangeChange = (value) => {
        setRange(value);
    };

    return (
        <div className="flex flex-col py-5 px-5 gap-5 w-64">
            <p className="text-2xl mb-2">Price Range ($)</p>
            <Slider
                defaultValue={[0, 500]}
                max={1000}
                min={0}
                step={50}
                value={range}
                onValueChange={handleRangeChange}
            />
            <div className="flex flex-col gap-3 mt-6">
            {priceList.map((price,index) => (
                <div className="flex space-x-2" key={index}>
                    <Checkbox id={price} key={index}/>
                    <label
                        className="text-sm text-gray-800"
                    >
                        {price}
                    </label>
                </div>
            ))}
        </div>
        </div>
    )
}

export default PriceFilter;