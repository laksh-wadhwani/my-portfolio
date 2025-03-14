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
    res.json("Hello")
})

const ProjectRouter = require("./Routes/ProjectRoutes");
app.use("/Admin", ProjectRouter)
