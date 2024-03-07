import MenuItemCard from "./MenuItemCard";
import menuData from "@/temp/MenuData";

const MenuGrid = () => {
    return (
        <div className="flex flex-col space-y-4">
            <div className="pt-6">
                <p className="text-xl font-normal">Showing 1-9 of 99</p>
            </div>
            <div className='grid grid-cols-3'>
                {menuData.map((obj) => (
                    <MenuItemCard name={obj.name} image={obj.image} rating={obj.rating} price={obj.price} />
                ))}
            </div>

        </div>

    )
}

export default MenuGrid;