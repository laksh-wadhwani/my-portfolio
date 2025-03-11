import React from "react";
import "./navbar.css"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router";

const Navbar = () => {

    useGSAP(() => {
       gsap.from(".navbar",{
        y: -60,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
       })
    })

    const handleImage = () => {
        const heroSection = document.querySelector(".hero-section")
        if(heroSection)
            heroSection.scrollIntoView({behavior: "smooth"})
    }

    const handleProjects = () => {
        const projectSection = document.querySelector(".sections-3")
        if(projectSection)
            projectSection.scrollIntoView({behavior: "smooth"})
    }

    return(
        <React.Fragment>
            <div className="navbar">
                <div className="logo-project">
                    <img src="../nav_picture.jpg" alt="my logo" onClick={handleImage}/>
                    <span onClick={handleProjects}>Projects</span>
                </div>
                <Link to="https://wa.me/923072426590"><button className="contact-btn"><img src="../message.svg" alt="contact button" /></button></Link>
            </div>
        </React.Fragment>
    )
}

export default Navbar;