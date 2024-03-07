import { useState } from "react";


const PopularTags = () => {

    const [selectedIndices, setSelectedIndices] = useState([0]);

    const tagsList = [
        "Pizza", "Burger", "Cake", "Desserts", "Coffee & Tea", "Juices", "Italian Food", "Beverages", "Noodles", "Momos", "Sandwich"
    ]

    const handleClick = (index) => {
        setSelectedIndices([...selectedIndices, index]);
    };

    return (
        <div className="py-5 px-10">
            <p className="text-2xl mb-4">Popular Tags</p>
            {tagsList.map((tag, index) => (
                <button
                    className={`inline-flex justify-center items-center px-3 py-2 rounded-full border border-gray-200 hover:text-teal-600 hover:bg-teal-100 hover:border-teal-300 mx-1 my-1 ${selectedIndices.includes(index) ? 'bg-teal-100 text-teal-600 border-teal-300' : 'bg-none'}`}
                    key={index}
                    onClick={() => handleClick(index)}>
                    {tag}
                </button>
            ))}
        </div>
    )
}

export default PopularTags;