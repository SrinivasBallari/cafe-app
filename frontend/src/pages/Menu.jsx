import MenuGrid from '@/components/Menu/MenuGrid';
import MenuFilter from '@/components/Menu/MenuFilter';
import HomeFooterSection from '@/components/Home/HomeFooterSection';

const Menu = () => {
    return (
        <div>
            <div className='grid grid-cols-1 xl:grid-cols-5  lg:p-20 space-x-1 -md:space-x-4'>

                <div className='hidden xl:col-span-1 xl:flex xl:flex-col xl:space-y-2'>
                    <MenuFilter />
                </div>

                <div className='col-span-4 xl:col-span-4 px-14'>
                    <MenuGrid />
                </div>
            </div>
            <HomeFooterSection />
        </div>

    )
}

export default Menu;