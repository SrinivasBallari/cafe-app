import axios from 'axios';

const registerUser = async (username, email, password) => {
    try {
        if(username == '' || email == '' || password == ''){
            alert("All fields are required");
            
        }
        if(password.length < 6){
            alert("Password must be at least 6 characters long");
        }
        const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
            username,
            email,
            password
        });
        return response;
    } catch (error) {
        throw error;
    }
};

export default registerUser;