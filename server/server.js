import express from "express";
import mongoose from "mongoose";
import authRouter from './authRouter.js'
import cors from "cors"

const PORT = 5000;
const DB_URL = `mongodb+srv://SemX:kolyasem@cluster0.0a5e2.mongodb.net/?retryWrites=true&w=majority`

const app = express();
app.use(express.json());
app.use('/', authRouter)
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

const start = async () => {
    try {
        await app.listen(PORT, (req, res) => {
                mongoose.connect(DB_URL)
                console.log(`server started on port : ${PORT}`);
            })
    } catch (e) {
        console.log(e)
    }
}
start()