var express = require("express");
var mdb = require("mongoose");
var signup = require('./models/signup')
var cors = require('cors')

 
var app = express();
var PORT = 6001;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mdb
  .connect("mongodb://localhost:27017/project")
  .then(() => {
    console.log("MongoDB is connected successfully..");
  })
  .catch((err) => {
    console.log(err);
  });  

app.post('/signup',async(req,res)=>{
    var {Name,Email,Password} = req.body;
    var signupp = new signup(
        {
            Name : Name,
            Email : Email,
            Password : Password
        }
    )
    await signupp.save();
    res.send("Data is Added...")
})

app.post("/login",async (req,res)=>{
    var {Email,Password} = req.body;
    console.log(Email,Password)
    try{
        var existingUser = await signup.findOne({Email:Email})
        if(existingUser){
            if(existingUser.Password !== Password){
                res.status(404).json("Invalid Credentials")
            }
            else{
                res.status(200).json({Message:"Login Successfully..",isLoggedin:true})
            }
        }
        else{
            res.status(404).send("Create an Account...")
        }
    }
    catch(err){
        console.log(err)
        res.status(404)
    }
})

app.listen(PORT,()=>{
    console.log("Backend Server is Started...")
})
