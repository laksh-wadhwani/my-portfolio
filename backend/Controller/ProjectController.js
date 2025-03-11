const { request } = require("express");
const ProjectTable = require("../Models/Project");

const ProjectUpload = async(request, response) => {
    const {projectName, projectDescription, projectURL, techStack} = request.body;
    const projectImages = request.files.map(file => file.filename)
    const newProjectEntry = new ProjectTable({projectName,projectDescription,projectURL,projectImages, techStack})
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