import express from "express"
import 'dotenv/config'
import cors from "cors";
import dbConnect from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
const app = express();

const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json())
dbConnect();


app.get("/", (req, res) =>{
    res.send("Hello from orebi api server");
});

app.use("/api/user", userRouter)

 app.listen(port, () =>{
    console.log(`server is running on http://localhost:${port}`)
 })


