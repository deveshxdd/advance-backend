const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/advance').then(()=>{
    console.log("connected db");
}).catch(()=>{
    console.log("not conneceted");
})

const userschema = new mongoose.Schema({
    username: String ,
    fullname: String ,
    email: String ,
    description: String ,
   interest:{
    type:Array,
    default:[]

   },
date:{
    type: Date,
    default:Date.now()
}
})

// ab hamara target ye hai ki agar hum search kre koi name to wo bina case sensitive bane search hojaae

const User = mongoose.model('user',userschema)
module.exports = User