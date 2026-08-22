const express=require("express");
const app=express();
let categoryrouter=require("./routes/categoryrouter")
app.get("/",(req,res)=>{
    res.json({
        message:"Inventory app started",
    })
})
app.use("/category",categoryrouter);
app.listen(5173,(error)=>{
    if(error){
        throw error;
    }
    else{
        console.log("App is running");
    }
})