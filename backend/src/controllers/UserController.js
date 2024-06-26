const { UserService } = require("../services/index");
const userService = new UserService();

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        return res.status(201).json({
            success: "true",
            data: user
        });
    } catch (error) {
        console.log("error in UserController.createUser : ", error);
        return res.status(500).json({ message: error.name });
    }
};

const login = async (req,res) => {
    try {
        const data = await userService.login(req.body.email, req.body.password);
        return res.status(200).json({
            status: "success",
            token: data.token,
            user: data.user,
        });
    } catch (error) {
        console.log("error in UserController.login : ", error);
        return res.status(500).json({ message: "Internal server error" });
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

const isAuthenticated = async (req,res) => {
    try {
        const response = await userService.isAuthenticated(req.headers['auth-token']);
        return res.status(200).json({
            status: "success",
            data: {message: "User is authenticated"},
        });
    } catch (error) {
        console.log("error in UserController.isAuthenticated : ", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    createUser,
    deleteUser,
    login,
    isAuthenticated
};
