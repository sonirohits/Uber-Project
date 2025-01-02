const mongoose =require('mongoose');

function connectDb(){
    mongoose.connect(process.env.DB_CONNECT)
    .then(function(){
        console.log("connect to the db");
    }).catch(function(e){
        console.log("error occured",e); 
    })
}

module.exports =connectDb;