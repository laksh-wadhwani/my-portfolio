import React, { useEffect, useState } from "react";
import "./landingPage.css";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin)



const LandingPage = () => {

  const [projectData, setData] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://my-portfolio-backend-ten.vercel.app/Admin/GetProjectData")
    .then(response => setData(response.data))
  },[])

  const handleProjectClick = projectDetails => {
    navigate(
      `/Project/${projectDetails._id}`,
      {state: {projectDetails}}
    )
  }
  
  useGSAP(() => {

    gsap.to(".sections-1", 
      { willChange: "background", backgroundColor: "rgb(29,29,29)", opacity: 1, duration: 1, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
      scrollTrigger:{trigger: ".sections-1", scroller: "body", start: "top 50%", end: "top: 40%", scrub: 1, }
    })

    gsap.fromTo(".about", 
      {opacity: 0, x: "100%"},
      {opacity: 1, x: 0, stagger: 0.1, duration: 1, ease: "back.inOut",
        scrollTrigger: {trigger: ".about", scroller: "body", start: "top 60%", end: "top 62%", scrub: 3}
      })

    gsap.from(".sections-1 p:nth-of-type(2)",
      {opacity: 0, x: 40, duration: 1,
        scrollTrigger: {trigger: ".sections-1 p:nth-of-type(2)", scroller: "body", start: "top 50%", end: "top 65%", scrub: 3}
      })

    gsap.to(".sections-2", 
      { willChange: "background", backgroundColor: "rgb(29,29,29)", opacity: 1, duration: 1, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
      scrollTrigger:{trigger: ".sections-2", scroller: "body", start: "top 55%", end: "top: 50%", scrub: 0.7}
    })

    gsap.fromTo(".sections-2 > div > h2", 
      {opacity: 0, x: "-100%"},
      {opacity: 1, x: 0, stagger: 0.1, duration: 1, ease: "back.inOut",
        scrollTrigger: {trigger: ".sections-2 > div > h2", scroller: "body", start: "top 60%", end: "top 62%", scrub: 5}
      })
    
    gsap.from(".sections-2 > div > p", {
      opacity: 0, y: 30, duration: 1,
      scrollTrigger: {trigger: ".sections-2 > div > p", scroller: "body", start: "top 55%", end: "top 60%", scrub: 2}
    })

    gsap.from(".skills", 
      {opacity: 0, y: 100, duration: 2,
        scrollTrigger: {trigger: ".skills", scroller: "body", start: "top 70%", end: "top 75%", scrub: 5,}
      })

    gsap.to(".sections-3",{
      willChange: "background", backgroundColor: "rgb(29,29,29)", opacity: 1, duration: 1, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
      scrollTrigger:{trigger: ".sections-3", scroller: "body", start: "top 50%", end: "top: 40%", scrub: 1}
    })

    gsap.to(".sections-4",{
      willChange: "background", backgroundColor: "rgb(29,29,29)", opacity: 1, duration: 1, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
      scrollTrigger:{trigger: ".sections-4", scroller: "body", start: "top 50%", end: "top: 40%", scrub: 1}
    })
  })
  
  return (
    <React.Fragment>
      <div className="main-box">
        <div className="hero-section">
          <span>Laksh</span>
          <h1>Full Stack Dev.</h1>
          <p>
            Elevating digital
            experiences through code. Explore my portfolio to see
            <br />
             innovation in action.
          </p>
        </div>
        <div className="section sections-1">
          <p>{"Hi, I'm Laksh Wadhwani, a designer and full-stack developer based in Karachi.".split("").map(char =>(
            <span className="about">{char}</span>
          ))}</p>
          <p>
            With expertise in both front-end and back-end development, I create
            engaging and innovative user experiences by translating creative
            designs into fully functional websites and applications.
          </p>
        </div>
        <div className="section sections-2">
          <div>
              {"i shape the perfect solutions".split("").map(char => (
                <h2>{char}</h2>
              ))}
            <p>
              I build fast, reliable, and scalable websites to meet your needs.
              Like a steady stream, I handle challenges smoothly and deliver
              efficient digital experiences to help your business grow
            </p>
          </div>
          <div className="skills">
              <div>
                <img src="./ui.svg" alt="Skills Logo" />
                <span>
                  UI/UX
                  <br />
                  Designer
                </span>
              </div>

              <div>
                <img src="./backend.svg" alt="Skills Logo" />
                <span>
                  Backend
                  <br />
                  Developer
                </span>
              </div>

              <div>
                <img src="./frontend.svg" alt="Skills Logo" />
                <span>
                  Frontend
                  <br />
                  Developer
                </span>
              </div>

              <div>
                <img src="./wordpress.svg" alt="Skills Logo" />
                <span>
                  Wordpress
                  <br />
                  Developer
                </span>
              </div>
             
          </div>
        </div>
        <div className="section sections-3">
          <h2>Latest Work</h2>
          <div className="projects">
            {projectData.map(project => (
                 <div key={project._id} className="project-card">
                  <div>
                    <span>{project.projectName}</span>
                    <button>
                      <img src="./next.svg" alt="button" onClick={() => handleProjectClick(project)}/>
                    </button>
                  </div>
                  <img src={`https://my-portfolio-backend-ten.vercel.app/ProjectImages/${project.projectImages[0]}`} alt="Project" />
                </div>
            ))}
          </div>
        </div>
        <div className="section sections-4">
            <span>get in touch</span>
            <div className="contact">
              <Link to="mailto:laksh.wadhwani55@gmail.com" style={{all:"inherit"}}><img className="contact-img" src="./mail.svg" alt="Mail"/></Link>
              <Link to="https://www.linkedin.com/in/lakshwadhwani/" style={{all:"inherit"}}><img className="contact-img" src="./linkedin.svg" alt="Mail"/></Link>
              <img className="contact-img" src="./github.svg" alt="Mail"/>
              <Link to="https://wa.me/923072426590" style={{all:"inherit"}}><img className="contact-img" src="./whatsapp.svg" alt="Mail"/></Link>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
