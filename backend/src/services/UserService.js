const { deleteUser } = require('../controllers/UserController');
const { UserRepo } = require('../repositories/index');
const { JWT_KEY } = require('../config/serverConfig');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserService {

    constructor() {
        this.userRepo = new UserRepo();
    }

    #validatePassword(userInputPassword,encryptedPassword) {
        try {
            return bcrypt.compareSync(userInputPassword,encryptedPassword);
        } catch (error) {
            console.log("Error occured in validating token",error);
            throw({error});
        }
    }

    #verifyToken(token){
        try {
            const response = jwt.verify(token, JWT_KEY);
            console.log(response);
            return response;
        } catch (error) {
            console.log("Error occured in validating token",error);
            throw({error});
        }
    }

    #createToken(user) {
        try {
            const createdToken = jwt.sign(user, JWT_KEY, {expiresIn: '3d'});
            return createdToken;
        } catch (error) {
            console.log("Error occured in creating token");
            throw(error);
        }    
    }

    async createUser(data) {
        try {
            const user = await this.userRepo.create(data);
            return user;
        } catch (error) {
            console.log("error occurred in UserService.createUser: ", error);
            throw error;
        }
    }

    async login(email, plainPassword) {
        try {
            const user = await this.userRepo.getUserByEmail(email);
            if (!user) {
                throw({error: "User not found"});
            }
            const isPasswordValid = this.#validatePassword(plainPassword, user.password);
            if (!isPasswordValid) {
                throw({error: "Invalid password"});
            }
            const token = this.#createToken({email:user.email,id:user.id});
            return token;
        } catch (error) {
            console.log("error occurred in UserService.login: ", error);
            throw error;
        }
    }

    async isAuthenticated(token){
        try {
            const response = this.#verifyToken(token);
            if(!response){
                throw {error : "Invalid Token"}
            }
            const user = await this.userRepo.getUser(response.id);
            return user.id;
        } catch (error) {
            console.log("Error occured in user service layer ");
            throw({error});
        }
    }

    async deleteUser(id) {
        try {
            const user = await this.userRepo.delete(id);
            return user;
        } catch (error) {
            console.log("error occurred in UserService.deleteUser: ", error);
            throw error;
        }
    }
}

module.exports = UserService;

