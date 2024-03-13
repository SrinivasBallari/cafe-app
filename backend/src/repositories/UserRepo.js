const { User } = require("../models/index");

class UserRepo {
    
    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("error occurred in UserRepo.create: ", error);
            throw error;
        }
    }

    async delete(id) {
        try {
            const user = await User.destroy({
                where: { id },
            });
            return user;
        } catch (error) {
            console.log("error occurred in UserRepo.delete: ", error);
            throw error;
        }
    }

    async getUserByEmail(email){
        try {
            const user = await User.findOne({
                where: { email },
            });
            return user;
        } catch (error) {
            console.log("error occurred in UserRepo.getUserByEmail: ", error);
            throw error;
        }
    }

    async getUser(id){
        try {
            const user = await User.findOne({
                where: { id },
            });
            return user;
        } catch (error) {
            console.log("error occurred in UserRepo.getUser: ", error);
            throw error;
        }
    }
}

module.exports = UserRepo;
