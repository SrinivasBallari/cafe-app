import { Link } from "react-router-dom";

const LoginForm = () => {
    const handleLogin = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <form onSubmit={handleLogin}>
                <h3 className="pl-3 text-base text-base">Email</h3>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="p-3 m-3 pl-5 rounded-full w-80 lg:w-96 focus:outline-none"
                />
                <br />
                <h3 className="pl-3 text-base text-base">Password</h3>
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
                    Login
                </button>
                <p className="text-sm text-center p-2">Don't have an account ? 
                    <Link to='/register' className="font-semibold text-sm text-teal-600"> Register</Link>
                </p>
            </form>
        </>
    );
};

export default LoginForm;
