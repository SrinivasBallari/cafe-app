const { UserService } = require("../services/index");
const userService = new UserService();

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        return res.status(201).json({
            status: "success",
            data: user,
        });
    } catch (error) {
        if (error.name == "SequelizeValidationError") {
            return res.status(400).json({
                status: "failed",
                data: error.errors[0].message,
            });
        } else {
            console.log("error in UserController.createUser : ", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
};

const deleteUser = async (req,res) => {
    try {
        const response = await userService.deleteUser(req.query.id);
        return res.status(200).json({
            status: "successfully deleted user",
            data: response,
        });
    } catch (error) {
        console.log("error in UserController.deleteUser : ", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    createUser,
    deleteUser
};