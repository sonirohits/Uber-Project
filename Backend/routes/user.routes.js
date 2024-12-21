const express =require('express');
const router =express.Router();
const userController =require('../controllers/user.controller.js');
const { body } = require('express-validator');  // <-- This is missing

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


module.exports=router; 