import { useState } from "react";

const ProductDescSection = ({ productDesc }) => {

    const [selectedSize, setSelectedSize] = useState(0);
    const [count, setCount] = useState(0);

    const sizes = ['S', 'M', 'L'];
    const nutritionsOrder = ['Calories','Fat','Carbs','Protein']
    return (
        <div className="flex flex-col px-6">
            <h2 className="font-medium text-5xl mb-3 text-center">{productDesc.name}</h2>
            <p className="text-gray-600 inline-flex justify-center p-2"> {productDesc.rating} ⭐ &nbsp; | &nbsp;  reviews: {productDesc.numberOfReviews}</p>
            <p className="text-gray-500 py-2 text-center font-normal">{productDesc.text}</p>
            <div className="flex justify-around gap-4 pt-4 overflow-x-auto">
                {productDesc.tags.map((tag, index) => (
                    <label key={index} className="bg-teal-100 text-teal-600 rounded-full w-40 p-1 mb-4 inline-flex justify-center">{tag}</label>
                ))}
            </div>
            <div className="flex gap-4 justify-start p-2 mb-4 items-center">
                <label className="text-md text-gray-500">Size : </label>
                <div>
                    {sizes.map((size, index) => (
                        <button key={index} className={`w-10 h-10 ${index == selectedSize ? 'bg-teal-100 rounded-full' : ''}`} onClick={() => setSelectedSize(index)}>
                            {size}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mb-4 gap-2 ">
                <div className="flex gap-2 border-2 rounded-full w-auto items-center border-gray-200 px-1 ">
                    <button className="bg-gray-200 rounded-full h-8 w-8 text-xl inline-flex items-center justify-center"> - </button>
                    <p className="px-1">{count}</p>
                    <button className="bg-gray-200 rounded-full h-8 w-8 text-sm inline-flex items-center justify-center"> + </button>
                </div>
                <button
                    type="submit"
                    className="p-3 pl-5 rounded-full bg-teal-200 text-teal-700 w-40"
                >
                    Buy Now
                </button>
                <button >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </button>
            </div>
            <label className="text-lg pb-2 pl-2">Nutrition Facts</label>
            <div className="border border-default-200 p-3 rounded-lg mb-4">
                <div className="grid grid-cols-4 justify-center">
                    {productDesc.nutrition.map((value, index) => (
                        <div className="text-center" key={index}>
                            <h4 className="text-base font-medium text-default-700 mb-1">{nutritionsOrder[index]== 'Calories' ? value : value+' g'}</h4>
                            <h4 className="text-base text-default-700">{nutritionsOrder[index]}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductDescSection;