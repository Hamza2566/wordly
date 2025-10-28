import express from "express"
import cors from "cors";
const port  =  4500;


const app = express()


app.use(cors()); // allow frontend to talk to backend
app.use(express.json());

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Express backend!" });
});







app.listen(port,()=>{
    console.log("server is running");
})
