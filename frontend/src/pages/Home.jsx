import homePageRandomGuy from '../assets/images/homePageRandomGuy.png'
import homePageRandomGuyTwo from '../assets/images/homePageRandomGuyTwo.png'
import homePageRandomGirl from '../assets/images/homePageRandomGirl.png'
import homePageGirlImage from '../assets/images/homePageGirlImage.png'
import homePageArrowImage from '../assets/images/homePageArrowImage.png'
import homePagePizzaImage from '../assets/images/homePagePizzaImage.png'
import homeFastDelivery from '../assets/images/homeFastDelivery.png'
import homeFastFoods from '../assets/images/homeFastFoods.png'
import homeHealthyFoods from '../assets/images/homeHealthyFoods.png'
import HomeMenuSideBar from '../components/HomeMenuSideBar'

const Home = () => {
    return (
        <>
        {/* intro-section */}
            <div className="flex flex-col justify-around xl:flex-row bg-gradient-to-b from-teal-100 py-10">
                <div className="py-20 px-10 text-center xl:text-start">
                    <div className="bg-teal-200 text-teal-600 rounded-full w-40 p-1 mb-5 inline-flex justify-center">#Special Food 🍕</div>
                    <div className="text-6xl font-bold flex-col space-y-4 mb-4">
                        <div>We Offer Delicious</div>
                        <div><span className="text-teal-600">Food</span> And Quick</div>
                        <div>Service</div>
                    </div>
                    <div className='flex-col py-5 font-sm text-default-700'>
                        <div>
                            Imagine you don't need a diet because we
                        </div>
                        <div>
                            provide healthy and delicious food for you!.
                        </div>
                    </div>
                    <div className='py-8'>
                        <button className='w-32 bg-teal-200 rounded-full text-base text-center py-3 hover:bg-teal-300'>
                            Order Now
                        </button>
                    </div>
                    <div className='flex justify-center xl:justify-start'>
                        <div className='flex pr-5'>
                            <div className='h-12 w-12'>
                                <img src={homePageRandomGuy} alt="loading" className='rounded-full w-full h-full' />
                            </div>
                            <div className='h-12 w-12'>
                                <img src={homePageRandomGuyTwo} alt="loading" className='rounded-full w-full h-full ring ring-white' />
                            </div>
                            <div className='h-12 w-12'>
                                <img src={homePageRandomGirl} alt="loading" className='rounded-full w-full h-full ring ring-white' />
                            </div>
                        </div>
                        <div>
                            <h3>Our Happy Customer's</h3>
                            <p>4.6 ⭐ <span className='text-gray-500'>(13.7K reviews)</span></p>
                        </div>
                    </div>
                </div>
                <div className='py-20 px-10 flex justify-center'>
                    <div className='flex'>
                        <img src={homePageGirlImage} alt="loading" />
                        <div className='flex flex-col justify-end hidden 2xl:flex'>
                            <div>
                                <img src={homePageArrowImage} alt="loading" className='object-scale-down' />
                            </div>
                            <div className='flex rounded-full w-48 items-center p-2'>
                                <div className='h-12 w-12 mr-2'>
                                    <img src={homePageRandomGuyTwo} alt="loading" className='rounded-full w-full h-full' />
                                </div>
                                <div>
                                    <h3 className='text-sm'>Jakob Culhane</h3>
                                    <p> ⭐ ⭐ ⭐ ⭐ </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        {/* about-us section */}
            <div className='flex flex-col-reverse sm:justify-around md:py-20 px-10 xl:flex-row sm:pt-0'>
                <div className='flex justify-center items-center py-10'>
                    <img src={homePagePizzaImage} alt="loading"  className='rounded-lg bg-gray-100 object-fill'/>
                </div>
                <div className='flex-col text-center'>
                    <div className="bg-teal-200 text-teal-600 rounded-full w-40 p-1 mb-4 inline-flex justify-center">About Us</div>
                    <div className="text-4xl font-bold flex-col space-y-4 mb-4">
                        <div>Where quality food</div>
                        <div>Meet Excellent services.</div>
                    </div>
                    <div className='flex-col py-5 font-sm'>
                        <div>
                            It's the perfect dining experience where every dish is crafted 
                        </div>
                        <div>
                            with fresh, high-quality ingredients and served by friendly staff who go.
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:justify-center'>
                        <div className='rounded-md py-10 px-10 hover:ring hover:ring-teal-200 gap-2'>
                            <img src={homeFastFoods} alt="loading" className='mb-3 inline-flex' />
                            <p className='text-xl font-medium'>Fast Foods</p>
                            <p className='text-sm font-sm text-current'>Fast Foods are crazy in taste</p>
                        </div>
                        <div className='rounded-md py-10 px-10 hover:ring hover:ring-teal-200 gap-2'>
                            <img src={homeHealthyFoods} alt="loading" className='mb-3 inline-flex' />
                            <h3 className='text-xl font-medium'>Healthy Foods</h3>
                            <p className='text-sm font-sm text-current'>Healthy Foods are nutrient-Dense Foods</p>
                        </div>
                        <div className='rounded-md py-10 px-10 hover:ring hover:ring-teal-200 gap-2'>
                            <img src={homeFastDelivery} alt="loading" className='mb-2 inline-flex' />
                            <h3 className='text-xl font-medium'>Fast Delivery</h3>
                            <p className='text-sm font-sm text-current'>Fast Foods are Time-Saving Foods</p>
                        </div>
                    </div>
                    <div className='flex mt-6 gap-7 justify-center'>
                        <button className='w-32 bg-teal-200 rounded-full text-base text-center py-2 hover:bg-teal-300'>
                            Get Started
                        </button>
                        <div className='flex rounded-full w-48 items-center p-2'>
                            <div className='h-12 w-12 mr-2'>
                                <img src={homePageRandomGirl} alt="loading" className='rounded-full w-full h-full' />
                            </div>
                            <div>
                                <h3 className='text-sm'>Sowmya Singh</h3>
                                <p> Founder CEO</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        {/* home-menu section */}
            <div className='py-20 px-20'>
                <HomeMenuSideBar/>
            </div>

        </>
    )
}

export default Home;