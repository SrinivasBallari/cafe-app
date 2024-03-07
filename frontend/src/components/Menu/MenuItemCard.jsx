import { useState } from "react";
import { Link } from "react-router-dom";

const MenuItemCard = (props) => {

    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col gap-4 border-2 border-gray-200 hover:border-teal-400 hover:shadow-2xl rounded-2xl my-3 mx-3">
            <div className="diplay-block m-auto py-3 w-80 h-80 border-b-2">
                <img src={props.image} alt="loading"/>
            </div>
            <div className="flex justify-between px-3 font-semibold text-xl">
                <p>{props.name}</p>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </button>
            </div>
            <div className="flex justify-start px-3 gap-2">
                <p>{props.rating}</p>
                ⭐
            </div>
            <div className="flex justify-between px-3">
                <p className="inline-flex justify-center items-center font-semibold text-xl">$ {props.price}</p>
                <div className="flex gap-2 border-2 rounded-full border-gray-200 px-1 py-1">
                    <button className="bg-gray-200 rounded-full h-6 w-6 text-xl inline-flex items-center justify-center"> - </button>
                    <p className="px-1">{count}</p>
                    <button className="bg-gray-200 rounded-full h-6 w-6 text-sm inline-flex items-center justify-center"> + </button>
                </div>
            </div>
            <button className="bg-teal-200 rounded-full inline-flex justify-center items-center py-2 mb-3 mx-3 hover:bg-teal-300">
                Add to cart
            </button>
        </div>
    )
}

export default MenuItemCard;