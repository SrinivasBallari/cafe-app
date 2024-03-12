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
}

module.exports = UserRepo;
