
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/live-graphs").then(()=>{ console.log("connection successfull")}
   ).catch((error)=>{
    console.log(error);
    })



   