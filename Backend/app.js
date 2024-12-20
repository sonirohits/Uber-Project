const express =require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const app =express();

dotenv.config();
app.use(cors());



app.get('/',function(req,res){
    res.send('working fine');
})

module.exports=app;