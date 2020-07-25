const express = require('express');
const bodyParser = require('body-parser');
const app=express();
const mongoose= require("mongoose");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
mongoose.connect(,{ useNewUrlParser: true,useUnifiedTopology: true });

const personSchema =new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  pw: String
});
const Person= mongoose.model("Person",personSchema);



app.get("/",function(req,res){
  res.render("present");
});
app.get("/sign",function(req,res){
  res.render("signup");
});
app.post("/home",function(req,res){
  const person = new Person({
    firstName: req.body.fname,
    lastName: req.body.lname,
    email: req.body.emailAdd,
    pw: req.body.password
  });
  person.save();
  res.render("home",{ homeName: req.body.fname});
//  console.log(req.body.password);
});
app.listen(3000,function(){
  console.log("server started at port 3000");
});
