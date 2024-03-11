const validateUserAuthentication = (req,res,next) => {
    if(!req.body.username || !req.body.email || !req.body.password){
        return res.status(400).json({message: 'Email, password and name fields are required'});
    }
    next();
}

module.exports = {
    validateUserAuthentication
}