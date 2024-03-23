import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { saveToken } from "@/utils/token";
import { AuthContext } from "@/context/authContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
                email,
                password
            });
            if(response.data.status == 'success') {
                saveToken(response.data.token);
                login(response.data.user);
                console.log(response);
                navigate('/');
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return (
        <>
            <form onSubmit={handleLogin}>
                <h3 className="pl-3 text-base text-base">Email</h3>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="p-3 m-3 pl-5 rounded-full w-80 lg:w-96 focus:outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br />
                <h3 className="pl-3 text-base text-base">Password</h3>
                <input
                    type="password"
                    placeholder="Enter your password"
                    className="p-3 m-3 pl-5 rounded-full w-80 lg:w-96 focus:outline-none mr-0"
                    onChange={(e) => setPassword(e.target.value)}
                    required
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
