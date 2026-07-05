import express from "express";
const app = express();
import sum from "./sum";

app.get("/",(req,res)=>{
    res.status(200).send("hey there!");
})
app.get("/sum/a/:b",(req,res)=>{
     const { a , b }= req.params;
     res.status(200).json({
        ans:sum(parseInt(a),parseInt(b))
     })
})

app.listen(4000,()=>{
    console.log("server is listening");
})
