const userModel=require('../models/user.model.js'); 
const bcrypt=require('bcrypt'); 
const jwt=require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model.js');
const captainModel=require('../models/captain.model.js');
module.exports.authUser=async function(req,res,next){
//     console.log(" in auth middleware is",req);
//     console.log(" in auth middleware req.body is",req.body);
// console.log('token header is',req.headers.authorization);
// console.log("cookie is ",req.cookies);
const token=req.cookies.token||req.headers.authorization?.split(' ')[1];
if(!token){
    return res.status(401).json({message:"Unauthorized"});
}
  const  isBlackListed =await blacklistTokenModel.findOne({token:token});
  if(isBlackListed){
      return res.status(401).json({message:"Unauthorized"});
  }
try{
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    const user=await userModel.findById(decoded._id); 
    if(!user){
        return res.status(401).json({message:"Unauthorized"});
    }
    req.user=user;
    return next();
}
catch(err){
    return res.status(401).json({message:"Unauthorized"});
}


}


module.exports.authCaptain=async function(req,res,next){
    const token=req.cookies.token||req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }
    const isBlackListed =await blacklistTokenModel.findOne({token:token});
    if(isBlackListed){
        return res.status(401).json({message:"Unauthorized"});
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const captain=await captainModel.findById(decoded._id);
        if(!captain){
            return res.status(401).json({message:"Unauthorized"});
        }
        req.captain=captain;
        return next();
    }
    catch(err){
        return res.status(401).json({message:"Unauthorized"});
    }
}