const express =require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const app =express();
const connectDb =require('./db/db.js');
dotenv.config();
app.use(cors());

const userRoutes =require('./routes/user.routes.js');

app.get('/',function(req,res){
    res.send('working fine');
})
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/users',userRoutes);
connectDb();

module.exports=app;