import menuData from '@/temp/MenuData';
import MenuItemCard from '../components/Menu/MenuItemCard'
import CategoryFilter from '@/components/Menu/CategoryFilter';
import PriceFilter from '@/components/Menu/PriceFilter';
// import PriceFilter
const Menu = () => {
    return (
        <div>
            {/* {menuData.map((obj) => (
                <MenuItemCard name={obj.name} image={obj.image} rating={obj.rating} price={obj.price} />
            ))} */}
            {/* <CategoryFilter/> */}

            <PriceFilter/>
        </div>
    )
}

export default Menu;