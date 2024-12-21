const userModel = require('../models/user.model.js');
const userServices = require('../services/user.service.js');
const { validationResult } = require('express-validator');

module.exports.registerUser = async function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;  // fullname is now an object
    const { firstname, lastname } = fullname;  // destructure firstname and lastname
    const hashedPassword = await userModel.hashPassword(password);
    const user = await userServices.createUser({
        firstname,
        lastname,
        email,
        password: hashedPassword
    });
    console.log(req.body);
    const token = user.generateAuthToken();
    res.status(201).json({ token, user });
}


module.exports.loginUser =async function(req,res,next){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const{email,password}=req.body;

    const user =await userModel.findOne({email}).select('+password');
    //+ ki vajhse se database me se password bhi fetch hoke ayega 
    //pure user ke sathe 
    if(!user){
        return res.status(401).json({message:"Invalid email or password"});
    }
    const isMatch=await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message:"Invalid email or password"});
    }
    const token=user.generateAuthToken();
    res.status(200).json({token,user});
}