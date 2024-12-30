const userModel = require('../models/user.model.js');
const userServices = require('../services/user.service.js');
const { validationResult } = require('express-validator');
const blakListTokenModel=require('../models/blacklistToken.model.js');

module.exports.registerUser = async function (req, res, next) {
    // console.log(" in registrationreq is",req);
    // console.log(" in registration req.body is",req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;  // fullname is now an object
    const { firstname, lastname } = fullname;  // destructure firstname and lastname
    const isUserAlreadyExists = await userModel.findOne({email:email});
    if(isUserAlreadyExists){
        return res.status(400).json({error:'User already exists'});
    }
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
    // console.log(" in login is",req);
    // console.log(" in login req.body is",req.body);
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
    res.cookie('token',token);
    res.status(200).json({token,user});
}

module.exports.getUserprofile=async function (req,res,next){
    res.status(200).json(req.user);
}

module.exports.logoutUser=async function(req,res,next){
    res.clearCookie('token');
    const token=req.cookies.token || req.headers.authorization.split(' ')[1];
    console.log("upcoming error is ",token);
    await blakListTokenModel.create({token});
    res.status(200).json({message:"Logged out successfully"}); 
}