import React from "react";
import "./project.css";
import { useLocation } from "react-router";

const Project = () => {

    const location = useLocation();
    const { projectDetails } = location.state || {}

    return(
        <React.Fragment>
            <div className="main-box">
                <div className="section project-section">
                    <div className="project-information">
                        <div className="name-site">
                            <h1>{projectDetails.projectName}</h1>
                            <button>
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
                    {projectDetails.projectImages.map(images => (
                        <img src={`https://my-portfolio-backend-rouge-kappa.vercel.app/ProjectImages/${images}`} alt="" />
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Project;
