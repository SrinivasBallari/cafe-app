const { UserRepo } = require('../repositories/index');
const userRepo = new UserRepo();

class UserService {
    
    async createUser(data) {
        try {
            const user = await userRepo.create(data);
            return user;
        } catch (error) {
            console.log("error occurred in UserService.createUser: ", error);
            throw error;
        }
    }
}

module.exports = UserService;

