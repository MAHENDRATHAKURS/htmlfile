const path = require('path');
const express = require("express");
const app =express();
const hbs = require('hbs');
const async = require('hbs/lib/async');
require("./DB/conn");
const Ragister = require("../src/ragisters");
const validator=require('validator');
const { error } = require('console');
// const static =require("../templates/partials");

console.log(__dirname ,"../templates/views");
const staticpath=path.join(__dirname,"../public");
const templatepath=path.join(__dirname ,"../templates/views");
 const partialspath=path.join(__dirname,"../templates/partials");

  app.use(express.static(staticpath));

app.set("view engine","hbs");
app.set("views", templatepath);
hbs.registerPartials(partialspath);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//  app.use(express.static(staticpath));
 app.get("/",(req, res)=>{
     res.render("index");
 });
  app.get("/ragister.js",(req, res)=>{
         console.log("ragister");
   });



   
 //create a new user in our database
app.post("/ragister",async(req, res)=>{
try{
    const number= req.body.number;
    const cnumber= req.body.cnumber;
     if(number==cnumber){
     const ragisterEmployee=new Ragister({
        name: req.body.name,
        age:   req.body.age,
        gender: req.body.gender,
        Email: req.body.Email,
        city:   req.body.city,
        number: req.body.number,
        cnumber: req.body.cnumber
        
    
    })
    
        const registered= await ragisterEmployee.save();
        res.status(201).render("index.hbs");
     }
    else{
         res.send('number are not matching')
     }   
   
    } catch(error){
    res.status(400).send(error);
}
});

// app.use(express.static("index"));
// app.get('/index',(req ,res) =>{
//     imageList=[];

//     imageList.push({src:"views\istockphoto-1153367333-612x612.jpg",name :"gym"})
//     imageList.push({src:"istockphoto-1279902517-612x612.jpg",name :"gym"})
   
   
//     res.render("index",{imageList:imageList});
//}

app.use(express.static("images"));
 app.get('/Static',(req ,res) =>{
    res.render('Static');});


app.listen(8000,()=>{
    console.log("start the server port 8000");
});

