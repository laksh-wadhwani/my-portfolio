import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const Admin = () => {

    const [projectUpload, setProject] = useState({
        projectName: "",
        projectDescription: "",
        projectURL: "",
        techStack: []
    })
    const [projectImages, setProjectImages] = useState([])

    const handleChange = eventTriggered => {
        const {name, value} = eventTriggered.target;
        if(name==="techStack"){
            setProject({
                ...projectUpload,
                [name]: value.split(",").map(tech => tech.trim()),
            });
        }
        else{
            setProject({
                ...projectUpload,
                [name]: value
            });
        }
    }

    const handleUpload = () => {
        const ProjectData = new FormData();
        Object.entries(projectUpload).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                value.forEach((item) => ProjectData.append(`${key}[]`, item)); 
            } else {
                ProjectData.append(key, value);
            }
        });
        for(let i=0; i<projectImages.length; i++) ProjectData.append("projectImages", projectImages[i])
        axios.post("https://my-portfolio-backend-rouge-kappa.vercel.app/Admin/ProjectUpload", ProjectData)
        .then(response => { alert(response.data.message) })
        .catch(error => console.log(error))
        console.log(Array.from(ProjectData.entries()));
    }

    return(
        <React.Fragment>
            <div className="main-box">
                <div className="main-box sign-box">
                    <h3>Project</h3>
                    <div className="main-box input-fields">
                        <input name="projectName" value={projectUpload.projectName} type="text" placeholder="Project Name" onChange={handleChange} />
                        <input name="projectURL" value={projectUpload.projectURL} type="url" placeholder="Project URL" onChange={handleChange} />
                        <input name="techStack" value={projectUpload.techStack.join(", ")} type="text" placeholder="Tech Stack (comma seperated)" onChange={handleChange} />
                        <input type="file" multiple placeholder="Project Images" onChange={e => setProjectImages(e.target.files)}/>
                        <textarea name="projectDescription" value={projectUpload.projectDescription} placeholder="Project description" onChange={handleChange} />
                    </div>
                    <button onClick={handleUpload}>Upload</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Admin;