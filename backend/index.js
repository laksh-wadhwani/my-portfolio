const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('uploads'))
dotenv.config();

mongoose.connect("https://my-portfolio-backend-ten.vercel.app", {})
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Server is connected and connected to MongoDB")
    })
})
.catch(error => {
    console.log("Unable to connect server and/or MongoDB" +error)
})

const ProjectRouter = require("./Routes/ProjectRoutes");
app.use("/Admin", ProjectRouter)
