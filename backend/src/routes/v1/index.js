const express = require('express');
const router = express.Router();
const { AuthMiddleware } = require('../../middlewares/index');
const { UserController } = require('../../controllers/index');

router.post(
    '/signup',
    AuthMiddleware.validateUserAuthentication,
    UserController.createUser
);

router.delete(
    '/delete',
    UserController.deleteUser
);

module.exports = router;
