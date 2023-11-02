const express = require("express")
const mongoose = require("mongoose")
const app = express();

//DB Connection
mongoose.connect("mongodb+srv://diyacs21:Diya%40123@cluster0.p3kgule.mongodb.net/")
  .then(()=>{
    console.log("Data is connected successfully");
})
.catch((err)=>{
    console.log(err,"Something went Wrong");
});

//Test API
app.get("/test",(req,res)=>{
    res.send("Hello Everyone, this is test API");
});

app.listen(4000,()=>{
    console.log("Server is running on port 4000");
});
