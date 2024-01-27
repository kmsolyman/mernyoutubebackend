const mongoose = require("mongoose");

const DATABASE="mongodb+srv://kmsolyman:solyman@cluster0.7wpalig.mongodb.net/token?retryWrites=true&w=majority"

const DB = process.env.DATABASE

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=> console.log("DataBase Connected")).catch((err)=>{
    console.log(err);
})