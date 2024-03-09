import { Link } from "react-router-dom";

const RegistrationForm = () => {
    const handleRegistration = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <form onSubmit={handleRegistration}>
                <h4 className="pl-3 text-base text-base">Full Name</h4>
                <input
                    type="text"
                    placeholder="Enter your name"
                    className="p-3 m-3 pl-5 rounded-full w-80 lg:w-96 focus:outline-none"
                />
                <h4 className="pl-3 text-base text-base">Email</h4>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="p-3 m-3 pl-5 rounded-full w-80 lg:w-96 focus:outline-none"
                />
                <br />
                <h4 className="pl-3 text-base text-base">Password</h4>
                <input
                    type="password"
                    placeholder="Enter your password"
                    className="p-3 m-3 pl-5 rounded-full w-80 lg:w-96 focus:outline-none mr-0"
                />
                <br />
                <button
                    type="submit"
                    className="p-3 m-3 rounded-full w-80 lg:w-96 bg-teal-300"
                >
                    Register
                </button>
                <p className="text-sm text-center p-2">Already have an account ? 
                    <Link to='/login' className="font-semibold text-sm text-teal-600"> Login</Link>
                </p>
            </form>
        </>
    );
};

export default RegistrationForm;
