import mongoose from "mongoose"

const ProjectSchema = mongoose.Schema(
    {
        name: String,
        slug: {type: String, unique: true, sparse: true},
        tech_stack: [{type: String}],
        github_url: String,
        live_url: String,
        thumbnail: String,
        screenshots: [{type: String}],
        description: String
    },
    { timestamps: true }
)

const ProjectsTable = mongoose.model("Projects", ProjectSchema)

export default ProjectsTable