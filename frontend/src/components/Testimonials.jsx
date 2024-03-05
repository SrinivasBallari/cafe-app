import testimonial from '../assets/images/testimonial.png';
import homePageRandomGuy from '../assets/images/homePageRandomGuy.png'
import homePageRandomGuyTwo from '../assets/images/homePageRandomGuyTwo.png'
import homePageRandomGirl from '../assets/images/homePageRandomGirl.png'
import testimonialDesc from '../assets/images/testimonialDesc.png'
import homeGirl2 from '../assets/images/homeGirl2.png'

const Testimonials = () => {
    return (
        <div className="flex flex-col xl:flex-row justify-around px-10 py-20 ">
            <div>
                <img src={testimonial} alt="loading" className='display-block m-auto mb-4'/>
            </div>
            <div className='flex flex-col items-center text-center xl:items-start'>
                <div className="bg-teal-200 text-teal-600 rounded-full w-40 p-1 mb-10 inline-flex justify-center inline-flex">About Us</div>
                <h2 className='text-4xl font-bold'>What they say about us ...</h2>
                <div className='flex w-48 items-center p-2 mt-4'>
                    <div className='h-12 w-12 mr-2'>
                        <img src={homePageRandomGuy} alt="loading" className='rounded-full w-full h-full' />
                    </div>
                    <div>
                        <h3 className='text-sm'>Karthik Subbaraj</h3>
                        <p> ⭐ ⭐ ⭐ ⭐ ⭐</p>
                    </div>
                </div>
                <img src={testimonialDesc} alt="loading" className='mt-2' />
                <div className='flex mt-2 gap-5 pl-3'>
                    <div className='h-12 w-12'>
                        <img src={homePageRandomGuy} alt="loading" className='rounded-full w-full h-full ring ring-teal-200' />
                    </div>
                    <div className='h-12 w-12'>
                        <img src={homePageRandomGuyTwo} alt="loading" className='rounded-full w-full h-full ring ring-teal-200' />
                    </div>
                    <div className='h-12 w-12'>
                        <img src={homePageRandomGirl} alt="loading" className='rounded-full w-full h-full ring ring-teal-200' />
                    </div>
                    <div className='h-12 w-12'>
                        <img src={homeGirl2} alt="loading" className='rounded-full w-full h-full ring ring-teal-200' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;