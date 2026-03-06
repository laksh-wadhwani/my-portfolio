import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"
import bodyParser from "body-parser";

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))
dotenv.config();

mongoose.connect(process.env.DB_URL, {})
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Server is connected and connected to MongoDB")
    })
})
.catch(error => {
    console.log("Unable to connect server and/or MongoDB" +error)
})

app.get("/", (req, res) => {
    res.json("Portfolio Server is Running")
})

import authRoutes from "./Routes/auth.routes.js"
app.use("/admin/auth", authRoutes)

import projectRoutes from "./Routes/projects.routes.js"
app.use("/admin", projectRoutes)