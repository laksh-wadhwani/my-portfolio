const { request } = require("express");
const ProjectTable = require("../Models/Project");
const cloudinary = require("../utils/cloudinary")

const ProjectUpload = async(request, response) => {
    const {projectName, projectDescription, projectURL, techStack} = request.body;
    const projectImages = request.files.map(file => {
        return cloudinary.uploader.upload(file.path)
        .then(result => result.secure_url)
        .catch(error => {
            console.log("Image Upload Error: ", error)
            return null
        })
    })
    const imagesURL = await Promise.all(projectImages)
    const newProjectEntry = new ProjectTable({projectName,projectDescription,projectURL, images:imagesURL, techStack})
    const projectCheck = await ProjectTable.findOne({projectName})
    try{
        if(!projectCheck){
            await newProjectEntry.save();
            response.send({message: "Your project has uploaded successfully"})
        }
        else return response.send({messgae: "Project already exist"})
    }
    catch(error){
        console.log(error)
        return response.send({message: "Internal Server Error"})
    }
}

const GetProjectData = async(request, response) => {
    try{
        const data = await ProjectTable.find()
        return response.send(data)
    }
    catch(error){
        console.log(error)
        response.send({message: "Internal Server Error"})
    }
}

module.exports = {ProjectUpload, GetProjectData}