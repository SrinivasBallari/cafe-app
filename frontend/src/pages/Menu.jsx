import MenuGrid from '@/components/Menu/MenuGrid';
import MenuFilter from '@/components/Menu/MenuFilter';
import HomeFooterSection from '@/components/Home/HomeFooterSection';

const Menu = () => {
    return (
        <div>
            <div className='grid grid-cols-4 xl:grid-cols-5 content-center px-10 py-10 just'>

                <div className='hidden xl:col-span-1 xl:flex xl:flex-col xl:space-y-2'>
                    <MenuFilter />
                </div>

                <div className='col-span-4 xl:col-span-4'>
                    <MenuGrid />
                </div>
            </div>
            <HomeFooterSection />
        </div>

    )
}

export default Menu;