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