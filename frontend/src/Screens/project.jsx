import React from "react";
import "./project.css";
import { useLocation, Link } from "react-router";


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
                            <Link to={projectDetails.projectURL}><button>
                                <img src="../next.svg" alt="button" />
                            </button></Link>
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
