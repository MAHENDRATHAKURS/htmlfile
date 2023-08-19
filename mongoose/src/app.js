
const mongoose= require('mongoose');
//connection creation and creatin new ad
mongoose.connect("mongodb://localhost:27017/mthakur")
.then(()=>console.log("connection succesfully"))
 .catch((err)=>console.log("err"));

 //schema

 const playlistSchema=new mongoose .Schema({
    name:{
        type:String,
        required:true},
    ctype:String,
    videos:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
 })

 //collection create
 const Playlist = new mongoose.model("Playlist",playlistSchema);

 //create document or insert
const CreateDocument = async()=>{
    try{
 const reactPlaylist = new Playlist({
    name :"reactjs",
    ctype:"front End",
    videos:1,
    author:"mahendra",
    active:true
 })
 const mongoPlaylist = new Playlist({
    name :"mongoDB",
    ctype:"database",
    videos:1,
    author:"mahendra",
    active:true
 })
 const expressPlaylist = new Playlist({
    name :"express",
    ctype:"back End",
    videos:1,
    author:"mahendra",
    active:true
 })
 const mongoosePlaylist = new Playlist({
    name :"mongoose",
    ctype:"Database",
    videos:1,
    author:"mahendra",
    active:true
 })
const result =await Playlist.insertMany([mongoosePlaylist,reactPlaylist,expressPlaylist,mongoPlaylist,]);
console.log (result);
    }
    catch(err){
        console.log (err);

    }
}
CreateDocument();