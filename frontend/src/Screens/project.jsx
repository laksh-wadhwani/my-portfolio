import React from "react";
import "./project.css";

const Project = () => {
    return(
        <React.Fragment>
            <div className="main-box">
                <div className="section project-section">
                    <div className="project-information">
                        <div className="name-site">
                            <h1>FitClub Connect</h1>
                            <button>
                                <img src="./next.svg" alt="button" />
                            </button>
                        </div>
                        <div className="project-description">
                            <p>Relo embarked on a journey of launching a new product, and my role was to crafting an impactful user-focused website in close collaboration with the sales team.</p>
                        </div>
                        <div className="tech-stack">
                            <button>ReactJS</button>
                            <button>MongoDB</button>
                            <button>Express JS</button>
                            <button>Node JS</button>
                        </div>
                    </div>
                </div>
                <div className="project-display">
                    <img src="./sahil.png" alt="" />
                    <img src="./sahil.png" alt="" />
                    <img src="./sahil.png" alt="" />
                    <img src="./sahil.png" alt="" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Project;