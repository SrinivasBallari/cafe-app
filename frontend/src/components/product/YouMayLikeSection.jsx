import menuData from "@/temp/MenuData";
import MenuItemCard from "../Menu/MenuItemCard";

const YouMayLike = ({items}) => {

    return (
        <div>
            <h4 className="font-normal text-xl p-4 ">You may also like </h4>
            <div className='flex flex-col'>
                {items.map((obj, index) => (
                    <MenuItemCard name={obj.name} image={obj.image} rating={obj.rating} price={obj.price} key={index} />
                ))}
            </div>
        </div>

    )
}

export default YouMayLike;