import MenuItemCard from "../Menu/MenuItemCard";

const YouMayLike = ({items}) => {

    return (
        <div className="lg:p-10">
            <h4 className="font-normal text-xl p-4 ">You may also like </h4>
            <div className='grid grid-cols-1 min-[900px]:grid-cols-2 xl:grid-cols-4'>
                {items.map((obj, index) => (
                    <MenuItemCard name={obj.name} image={obj.image} rating={obj.rating} price={obj.price} key={index} />
                ))}
            </div>
        </div>

    )
}

export default YouMayLike;