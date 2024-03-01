import menuList from '../temp/HomePageMiniMenuData.js';

const HomeMenuSideBar = () => {
    return <>
        <div>
            <div className="bg-teal-200 text-teal-600 rounded-full w-40 p-1 mb-4 inline-flex justify-center">Menu</div>
            <h3>Special Menu For You ...</h3>
            <div>
                {Object.entries(menuList).map(key => console.log(key))}
            </div>
        </div>
    </>
}

export default HomeMenuSideBar;