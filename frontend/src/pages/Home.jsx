import homePageRandomGuy from '../assets/images/homePageRandomGuy.png'
import homePageRandomGuyTwo from '../assets/images/homePageRandomGuyTwo.png'
import homePageRandomGirl from '../assets/images/homePageRandomGirl.png'
import homePageGirlImage from '../assets/images/homePageGirlImage.png'
import homePageArrowImage from '../assets/images/homePageArrowImage.png'
const Home = () => {
    return (
        <>
            <div className="grid grid-cols-2 justify-items-center bg-gradient-to-b from-teal-100">
                <div className="py-20 px-10">
                    <div className="bg-teal-100 text-teal-600 rounded-full w-40 p-1 text-center mb-3">#Special Food 🍕</div>
                    <div className="text-6xl font-bold flex-col space-y-4 mb-4">
                        <div>We Offer Delicious</div>
                        <div><span className="text-teal-600">Food</span> And Quick</div>
                        <div>Service</div>
                    </div>
                    <div className='flex-col py-5 font-medium text-lg text-default-700'>
                        <div>
                            Imagine you don't need a diet because we
                        </div>
                        <div>
                            provide healthy and delicious food for you!.
                        </div>
                    </div>
                    <div className='py-8'>
                        <button className='w-32 bg-teal-200 rounded-full text-base text-center py-3'>
                            Order Now
                        </button>
                    </div>
                    <div className='flex'>
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
                <div className='py-20 px-10'>
                    <div className='flex'>
                        <img src={homePageGirlImage} alt="loading" />
                        <div className='flex flex-col justify-end'>
                            <div>
                                <img src={homePageArrowImage} alt="loading" className='object-scale-down' />
                            </div>
                            <div className='flex rounded-full w-48 items-center p-2 bg-white'>
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
            
        </>
    )
}

export default Home;