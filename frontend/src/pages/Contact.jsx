import contact from '../assets/images/contact.png';
import HomeFooterSection from '@/components/Home/HomeFooterSection';

const ContactPage = () => {

    const handleSubmission = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div className='flex flex-col justify-around items-center p-10 text-center '>
                    <h2 className='mb-4 font-bold text-4xl'>Connect With Us</h2>
                    <p className='font-light text-sm text-gray-500'>Whether you're planning a special event, have dietary preferences, or simply want to chat about our menu, we're here for you. Reach out through the contact details provided and let us make your dining experience at Yum memorable.</p>
                    <img src={contact} alt="loding" />
                </div>

                <div>
                    <form onSubmit={handleSubmission}>
                        <div className='flex flex-col gap-4 p-10'>
                            <div className='grid grid-cols-1 sm: grid-cols-2 gap-2 max-[1155px]:grid-cols-1'>
                                <div className='flex flex-col gap-2'>
                                    <label className="text-base text-base ">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="First name"
                                        className="p-3 pl-5 rounded-full focus:outline-none border border-gray-300"
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className="text-base text-base">Last Name</label>

                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="p-3 pl-5 rounded-full focus:outline-none border border-gray-300 "
                                    />
                                </div>

                            </div>

                            <label className="text-base text-base">Email</label>
                            <input
                                type="Email"
                                placeholder="Email"
                                className="p-3 pl-5 rounded-full focus:outline-none mr-0 border border-gray-300 "
                            />
                            <label className="text-base text-base">Message</label>
                            <textarea
                                placeholder='Enter your message'
                                className='p-3 pl-5 rounded-2xl h-40 focus:outline-none mr-0 border border-gray-300 '
                            >
                            </textarea>
                            <button
                                type="submit"
                                className="p-3 pl-5 rounded-full bg-teal-300 w-48"
                            >
                                Send Message
                            </button>

                        </div>
                    </form>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 p-5 mb-10">
                <div className="bg-gray-100 rounded-lg">
                    <div className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="phone" className="lucide lucide-phone h-5 w-5 text-primary fill-white"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </span>
                            <h4 className="text-lg font-medium text-default-950">Call Us</h4>
                        </div>
                        <p className="text-default-500 text-sm mb-2">+91 90127-86781</p>
                        <p className="text-default-500 text-sm">+91 90425-45092</p>
                    </div>
                </div>
                <div className="bg-gray-100 rounded-lg">
                    <div className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="mail" className="lucide lucide-mail h-5 w-5 text-primary fill-white"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                            </span>
                            <h4 className="text-lg font-medium text-default-950">Email</h4>
                        </div>
                        <p className="text-default-500 text-sm mb-2">dhamish@gmail.com</p>
                        <p className="text-default-500 text-sm">helpyum@gmail.com</p>
                    </div>
                </div>
                <div className="bg-gray-100 rounded-lg">
                    <div className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="map-pin" className="lucide lucide-map-pin h-5 w-5 text-primary fill-white"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </span>
                            <h4 className="text-lg font-medium text-default-950">Address</h4>
                        </div>
                        <p className="text-default-500 text-sm mb-2">45834 Sattva city , Knowledg City</p>
                        <p className="text-default-500 text-sm">Raidurg , Hyderabad - 500015</p>
                    </div>
                </div>
            </div>

            <HomeFooterSection />
        </>

    )
}

export default ContactPage;