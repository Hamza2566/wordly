import express from "express"
const port  =  4500;


const app = express()



app.get("/",(req,res)=>{
    console.log("Hi");
    
})






app.listen(port,()=>{
    console.log("server is running");
})
