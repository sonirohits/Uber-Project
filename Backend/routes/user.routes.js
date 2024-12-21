const express =require('express');
const router =express.Router();
const userController =require('../controllers/user.controller.js');
const { body } = require('express-validator');  // <-- This is missing
const authMiddlwware=require('../middlewares/auth.middleware.js');
router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage(
        'First name must be at least 3 characters long'
    ),
    body('password').isLength({min:6}).withMessage(
        'password must be at least 6 characters long'
    )
],
userController.registerUser
)
router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage(
        'password must be at least 6 characters long'
    )
],
userController.loginUser
)

router.get('/profile',authMiddlwware.authUser,userController.getUserprofile);
router.get('/logout',authMiddlwware.authUser,userController.logoutUser);    

module.exports=router; 