const {default: mongoose} =require('mongoose');

const employeeSchema=new mongoose .Schema({
    name:{
        type:String,
        required:[true,"Name is required"]},
    age:{
                type:Number,
                required:[true,"age is required"]}, 
    gender:{
            type:String,
            required:[true,"Gender is required"]},
            
    Email:{
             type:String,
            required:[true,"email is required"]},
    city:{
           type:String,
           required:[true,"city is required"]},
   
    number:{
            type:Number,
            required:[true,"number is required"],
           },
     cnumber:{
                type:Number,
                required:[true,"cnumber is required"]
               }  , 
 });

 //collection create
 const Ragister = new mongoose.model("Ragister", employeeSchema);

 module.exports=Ragister;