import express from "express";
import mongoose from "mongoose";
import { MONGODB_URL, PORT } from "./config.js";
import Router from "./Routes/CupeRoutes.js";
import cors from "cors";


const app = express();
//Middelwear
app.use(express.json());

app.use("/cupes", Router);
//For Cross Origin Resource SHaring
app.use(cors());

app.get("/", (req,res) =>{
    console.log(req);
    return res.status(234).send("CUPE Start")
})

mongoose.connect(MONGODB_URL,).then(()=>{
    console.log("Connected to DB")
    app.listen(PORT,()=>{
        console.log(`Backend start at PORT ${PORT}`)
    });
}).catch((error)=>{
    console.log(error);
})
