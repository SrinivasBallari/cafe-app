import { Slider } from "@/components/ui/slider"
import { useState } from "react";

const PriceFilter = () => {

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(500);
    const [range, setRange] = useState([0, 500]);

    const handleRangeChange = (value) => {
        setRange(value);
        setMinPrice(range[0]);
        setMaxPrice(range[1]);
    };

    return (
        <div className="flex flex-col py-10 px-10 gap-5">
            <p className="font-semibold text-lg">Price Range</p>
            <Slider
                defaultValue={[0, 500]}
                max={1000}
                min={0}
                step={50}
                value={range}
                onValueChange={handleRangeChange}
            />
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center py-2">
                <label type="number" className="w-40 inline-flex justify-center items-center px-2 py-1 rounded-full border border-gray-300">Min Price : $ {minPrice}</label>
                <label type="number" className="w-40 inline-flex justify-center items-center px-2 py-1 rounded-full border border-gray-300">Min Price : $ {maxPrice}</label>
            </div>
        </div>
    )
}

export default PriceFilter;