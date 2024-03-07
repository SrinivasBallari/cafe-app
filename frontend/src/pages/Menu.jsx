import menuData from '@/temp/MenuData';
import MenuItemCard from '../components/Menu/MenuItemCard'
import CategoryFilter from '@/components/Menu/CategoryFilter';
import PriceFilter from '@/components/Menu/PriceFilter';
import PopularTags from '@/components/Menu/PopularTags';
import MenuGrid from '@/components/Menu/MenuGrid';

const Menu = () => {
    return (
        <div className='grid grid-cols-5 content-center px-10 py-10 just'>

            <div className='col-span-1 xl:col-span-1 xl:flex xl:flex-col  xl:space-y-2'>
                <CategoryFilter />

                <PriceFilter />

                <PopularTags />
            </div>

            <div className='col-span-4'>
                <MenuGrid/> 
            </div>

        </div>
    )
}

export default Menu;