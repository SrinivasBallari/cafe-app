import CategoryFilter from '@/components/Menu/CategoryFilter';
import PriceFilter from '@/components/Menu/PriceFilter';
import PopularTags from '@/components/Menu/PopularTags';

const MenuFilter = () => {
    return (
        <div className='w-full'>
            <CategoryFilter />

            <PriceFilter />

            <PopularTags />
        </div>
    )
}

export default MenuFilter;