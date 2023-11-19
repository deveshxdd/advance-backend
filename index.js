const express = require('express')
const app = express()
const port = 3001
// flash ko install krne ke baad hamare paas ek exppress session hona chahia
const expressSession = require('express-session')
const flash = require('connect-flash')

const cookieparser = require('cookie-parser')


app.set('view engine','ejs')

app.use(cookieparser())

app.use(expressSession({
    resave:false, // agar session ki value change na huee hoto firse save mt krna isse load kam pdega server pe
    saveUninitialized:false,
    secret: "hello hello baaey baaye"
}))

// express session ke turant baad setup kro kyuki flash ke lia express session setup ke lia jruri h

app.use(flash())

// iske turant baad aap flash use krskte ho

app.get('/',(req,res)=>{
    res.render('file')
})
app.get('/login',(req,res)=>{
   req.flash("agg",12) //aise bnate h flash data
    res.render('file')
})

// mtlb hum flash se kisi v route me data save krke kisi v route me use krskte h
 // agar login hojaae to hme next page dikha dena hai wrna 
    // hame ye flash msg dedena hai 
    // kaam ye h ki ek route ka data kisi dusre route me kaise use kare 
    // jo ki possible nhi h islia flash msg use krrhe they allow this 












app.get('/dev',(req,res)=>{
    req.session.ban = true
    res.cookie("age",25)
    // res islia likh rhe kyuki hum yaha se browser pe bhej rhe
    // cookies ab browser pe save hogya hai
    res.send("<h1>hey</h1>")
    // jiske laptop pe ye session hoga uspe dikhega
})
app.get('/devv',(req,res)=>{
    console.log(req.cookies.age)
  if(req.session.ban==true){
    res.send("you are banned")
  }
  else{
    res.send("you are not banned")
  }
    console.log(req.session)
    // jiske laptop pe ye session hoga uspe dikhega
})




//---------> SESSION <------------------------------------//
 // session mtlb hota hai server pe sata save krna
// agar client side se koi data aarhi hai aur usme koi change nhi h same data hi baar baar
// session pe save krne ke lia aarhi h to aapko session baar baar save nhi krta h islia hum resave false use krte hai
// saveuninitialie kai baar hum client side se koi aisa data bhejte h jiska name nhi hota hai baar baar aata h usko v baar baar save na krne se storage bachta hai 
// islia hum false lagate hai
// lekin ek problem ye hai ki agar hum server restart krte hai to session delete hojata hai
// jis tarike se session create hua h hum delete v krskte hai 
// session ko humlog bana v skte hai delete v krskte hai 




//-----------------> COOKIES <---------------------
// cookies ke lia npm i cookies krte hai fir setup krne ke baad use krskte hai 
// cookies save hoti hai browser pe



app.get('/delete',(req,res)=>{

    // how to delete cookies

      
res.clearCookie("age")


    req.session.destroy((err)=>{
        if(err){
            throw err
        }
        res.send("deleted")
    })
})


app.listen(port,()=>{
    console.log("port started at port",port)
})
