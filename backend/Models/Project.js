const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    projectName: String,
    projectDescription: String,
    projectURL: String,
    techStack: [{type: String}],
    projectImages: [{type: String}],
})

const ProjectTable = new mongoose.model("ProjectSchema", ProjectSchema);

module.exports = ProjectTable;