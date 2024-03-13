import { useState } from "react";
import { Link } from "react-router-dom";
import registerUser from "@/services/auth/handleRegistration";
import { useNavigate } from "react-router-dom";


const RegistrationForm = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegistration = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser(username, email, password);
            if(response && response.data.success){
                alert("Registration successfull, please login to continue");
                navigate('/login');
            }else{
                alert("Registration failed, please try again");
            }
        } catch (error) {
            if (error.response.data.message == 'SequelizeUniqueConstraintError') {
                alert("User is already registered with this email"); 
            }else{
                alert('Something went wrong !!')
            }
        }
    };

    return (
        <>
            <form onSubmit={handleRegistration}>
                <h4 className="pl-3 text-base text-base">Full Name</h4>
                <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="p-3 m-3 pl-5 rounded-full w-80 lg:w-96 focus:outline-none"
                />
                <h4 className="pl-3 text-base text-base">Email</h4>
                <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 m-3 pl-5 rounded-full w-80 lg:w-96 focus:outline-none"
                />
                <br />
                <h4 className="pl-3 text-base text-base">Password</h4>
                <input
                    type="password"
                    required
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
