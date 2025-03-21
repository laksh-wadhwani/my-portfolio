import React from "react";
import "./project.css";
import { useLocation, useNavigate } from "react-router";

const Project = () => {

    const location = useLocation();
    const navigate = useNavigate();
    
    const { projectDetails } = location.state || {}

    const handleProjectButton = projectLink => {
        navigate(projectLink)
    }
    return(
        <React.Fragment>
            <div className="main-box">
                <div className="section project-section">
                    <div className="project-information">
                        <div className="name-site">
                            <h1>{projectDetails.projectName}</h1>
                            <button onClick = {() => handleProjectButton(projectDetails.projectURL)}>
                                <img src="../next.svg" alt="button" />
                            </button>
                        </div>
                        <div className="project-description">
                            <p>{projectDetails.projectDescription}</p>
                        </div>
                        <div className="tech-stack">
                            {projectDetails.techStack.map(tech => (
                                <button>{tech}</button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="project-display">
                    {projectDetails.images.map(images => (
                        <img src={`${images}`} alt="" />
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Project;
