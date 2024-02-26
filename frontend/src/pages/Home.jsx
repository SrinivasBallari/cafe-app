import homePageRandomGuy from '../assets/images/homePageRandomGuy.png'
import homePageRandomGuyTwo from '../assets/images/homePageRandomGuyTwo.png'
import homePageRandomGirl from '../assets/images/homePageRandomGirl.png'
import homePageGirlImage from '../assets/images/homePageGirlImage.png'
import homePageArrowImage from '../assets/images/homePageArrowImage.png'
const Home = () => {
    return (
        <>
            <div className="flex flex-col justify-around xl:flex-row bg-gradient-to-b from-teal-100">
                <div className="py-20 px-10 text-center xl:text-start">
                    <div className="bg-teal-200 text-teal-600 rounded-full w-40 p-1 mb-5 inline-flex justify-center">#Special Food 🍕</div>
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
                        <button className='w-32 bg-teal-200 rounded-full text-base text-center py-3 '>
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

            <div className='h-40'>
                    asdfsdf
                </div>
            
        </>
    )
}

export default Home;