const blacklistTokenModel = require('../models/blacklistToken.model');
const captainModel=require('../models/captain.model');
const captainService=require('../services/captain.service');
const {validationResult}=require('express-validator');

module.exports.registerCaptain=async function(req,res){
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try{
        const {fullname,email,password,vehicle}=req.body;
        const {firstname,lastname}=fullname;
        const{color,plate,capacity,vehicleType}=vehicle;
        const hashedPassword=await captainModel.hashPassword(password);
        const isCaptainAlreadyExists=await captainModel.findOne({email:email})
        if(isCaptainAlreadyExists){
            return res.status(400).json({error:'Captain already exists'});
        }
        const captain=await captainService.createCaptain(
            {firstname,
            lastname,
            email,
          password:hashedPassword,
            color,
            plate,
            capacity,
            vehicleType}
        );
        const token=captain.generateAuthToken();
        res.status(201).json({token,captain});
    }catch(err){
        console.log("error come inside captincontrolle file");
        res.status(500).json({error:err.message});
    }
}
module.exports.loginCaptain=async function(req,res){
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try{
        const {email,password}=req.body;
        const captain=await captainModel.findOne({email:email}).select('+password');
        console.log("captain is",captain);
        if(!captain){
            return res.status(400).json({error:'Invalid email or password'});
        }
        const isMatch=await captain.comparePassword(password,captain.password);
        if(!isMatch){
            return res.status(400).json({error:'Invalid email or password'});
        }
        const token=captain.generateAuthToken();
        res.cookie('token',token); //cookie is set after login
        res.status(200).json({token,captain});
    }catch(err){
        res.status(500).json({error:err.message});
    }
}


module.exports.getCaptainProfile=async function(req,res){
return res.status(200).json({captain:req.captain});
}

module.exports.logoutCaptain=async function(req,res){
    const token=req.cookies.token||req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(400).json({error:'Invalid token'});
    }
    await blacklistTokenModel.create({token:token});
    res.clearCookie('token'); //cookie is cleared after logout
    return res.status(200).json({message:'Logout successfully'});
}