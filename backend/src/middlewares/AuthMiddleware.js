const validateUserSignUp = (req,res,next) => {
    if(!req.body.username || !req.body.email || !req.body.password){
        return res.status(400).json({message: 'Email, password and name fields are required'});
    }
    next();
}

const validateUserLogin = (req,res,next) => {
    if(!req.body.email || !req.body.password){
        return res.status(400).json({message: 'Email and password fields are required'});
    }
    next();
}   

const validateToken = (req,res,next) => {
    const token = req.headers['auth-token'];
    if(!token){
        return res.status(401).json({message: 'Token is required'});
    }
    next();
}

module.exports = {
    validateUserSignUp,
    validateUserLogin,
    validateToken
}

