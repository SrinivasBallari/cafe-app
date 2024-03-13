const express = require('express');
const router = express.Router();
const { AuthMiddleware } = require('../../middlewares/index');
const { UserController } = require('../../controllers/index');

router.post(
    '/auth/register',
    AuthMiddleware.validateUserSignUp,
    UserController.createUser
);

router.post(
    '/auth/login',
    AuthMiddleware.validateUserLogin,
    UserController.login
)

router.get(
    '/isAuthenticated',
    AuthMiddleware.validateToken,
    UserController.isAuthenticated
)

router.delete(
    '/delete',
    UserController.deleteUser
);

module.exports = router;
