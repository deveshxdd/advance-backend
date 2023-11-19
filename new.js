// in this we will study intermediate level of mongoose
// MONGO-DB

const express = require('express')
const app = express()
const port = 3002
const User = require('./models/new')

app.get('/',async(req,res)=>{
const user = await User.create({
    username: "iamaakash" ,
    fullname: "aakash upadhyay" ,
    email: "iamaksh@" ,
    description: "he is gymnast" ,
   interest:["gym","weight lifting","squats"]

})
res.send(user)
})

app.get('/user',async(req,res)=>{
    const reqq = RegExp('^iamDeveSh$','i')

    // SO HUM PHLE QUESTION SOLVE KRLIYE KI CASE INSENSITIVITY KAISE KRSKTE HAI

// hum yaha se dekh skte hai ki hum kaise v like capital ya small ye kaam krta hai
    // ^ ye use krte h suru ke lia $ ye use krte h last ke lia 
    // isse ye hota hai ki ye inke bich me search krta hai incasesensitvitely
    
     
   const usr = await User.find({username: reqq})
   // YAHA agar hum koi v letter capital ya small krde original se to wo search nhi ho pata so we use reqexp
res.send(usr)
})

// THE SECOND QUESTION IS 
// HOW TO FIND THE DOCUMENT WHERE AN ARRAY CONTAIN ALL THE SET VALUE
// JAISE HUME AISE BANDE DHUNDHNE H JISME COMMON HO


app.get('/userr',async(req,res)=>{
  
   const usr = await User.find({interest:{$all:['dance' ,  'acting']}})
   // isse humlog array me coomon chiz se user nikal skte hai 
   // {arrayname:{$all:["coomon name"]}}
   // $all mtlb all lo jisme ye common hai

res.send(usr)
})


// 3RD QUESTION HUM SPECIFIC DATE RANGE SE KAISE SEARCH KRKSTE HAI KISI V USER KO JO CREATE HUAA HAI











app.listen(port,()=>{
    console.log("port started at port",port)
})
