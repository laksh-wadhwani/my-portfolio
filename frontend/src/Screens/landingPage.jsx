import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaWordpressSimple } from "react-icons/fa";
import { CodeXmlIcon, MonitorDot, ServerCog } from "lucide-react";
import SkillCard from "../Components/SkillCard";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Mail from "../assets/mail.svg";
import ProjectCard from "../Components/ProjectCard";
import SocialButton from "../Components/SocialButton";
import axios from "axios";
import { BackendURL } from "../BackendContext";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin)


const LandingPage = () => {
  const API = BackendURL();
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/admin/get-projects-data`)
      .then((response) => setProjectsData(response.data))
      .catch((error) =>
        console.error("Getting error while fetching projects details: ", error),
      );
  }, [projectsData]);

  useGSAP(() => {
    gsap.to("#about-section", 
      { willChange: "background", backgroundColor: "#1d1d1d", opacity: 1, duration: 1, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
      scrollTrigger:{trigger: "#about-section", scroller: "body", start: "top 50%", end: "top: 40%", scrub: 1, }
    })

    gsap.fromTo(".about-text", 
      {opacity: 0, x: "100%"},
      {opacity: 1, x: 0, stagger: 0.1, duration: 1, ease: "back.inOut",
        scrollTrigger: {trigger: ".about-text", scroller: "body", start: "top 60%", end: "top 62%", scrub: 3}
      })

    gsap.from("#about-section p:nth-of-type(2)",
      {opacity: 0, x: 40, duration: 1,
        scrollTrigger: {trigger: "#about-section p:nth-of-type(2)", scroller: "body", start: "top 50%", end: "top 65%", scrub: 3}
      })

    gsap.to("#skill-section", 
      { willChange: "background", backgroundColor: "#1d1d1d", opacity: 1, duration: 1, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
      scrollTrigger:{trigger: "#skill-section", scroller: "body", start: "top 55%", end: "top: 50%", scrub: 0.7}
    })

    gsap.fromTo("#skill-section > div > h2", 
      {opacity: 0, x: "-100%"},
      {opacity: 1, x: 0, stagger: 0.1, duration: 1, ease: "back.inOut",
        scrollTrigger: {trigger: "#skill-section > div > h2", scroller: "body", start: "top 60%", end: "top 62%", scrub: 5}
      })

    gsap.from("#skill-section > div > p", {
      opacity: 0, y: 30, duration: 1,
      scrollTrigger: {trigger: "#skill-section > div > p", scroller: "body", start: "top 55%", end: "top 60%", scrub: 2}
    })

    gsap.from("#skills", 
      {opacity: 0, y: 100, duration: 2,
        scrollTrigger: {trigger: "#skills", scroller: "body", start: "top 70%", end: "top 75%", scrub: 5,}
      })


    gsap.to("#projects-section",{
      willChange: "background", backgroundColor: "#1d1d1d", opacity: 1, duration: 1, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
      scrollTrigger:{trigger: "#projects-section", scroller: "body", start: "top 50%", end: "top: 40%", scrub: 1}
    })

    gsap.to("#contact-section",{
      willChange: "background", backgroundColor: "#1d1d1d", opacity: 1, duration: 1, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
      scrollTrigger:{trigger: "#contact-section", scroller: "body", start: "top 50%", end: "top: 40%", scrub: 1}
    })
  })

  return (
    <React.Fragment>
      <div className="w-full flex flex-col gap-40 items-center pb-20">
        <div id="hero-section" className="h-dvh w-full bg-[url(main-picture.png)] bg-position-[0] bg-no-repeat bg-[#1a1a1a] bg-blend-lighten flex flex-col justify-center items-center text-[#dac5a7] text-center">
          <span className="text-5xl font-extralight font-garamod mb-3">
            Laksh
          </span>
          <h1 className="text-8xl font-bold font-atkinson mb-4">
            Full Stack Dev.
          </h1>
          <p className="text-2xl font-atkinson">
            Elevating digital experiences through code. Explore my portfolio to
            see <br /> innovation in action.
          </p>
        </div>

        <div id="about-section" className="w-[80%] flex items-center gap-16 py-24 px-12 shadow-2xl font-serif rounded-t-4xl box-border">
          <p className="w-[50%] text-4xl font-semibold leading-normal tracking-tight">{"Hi, I'm Laksh Wadhwani, a designer and full-stack developer based in Karachi.".split("").map(char => (
            <span className="about-text">{char}</span>
          ))}</p>
          <p className="w-[50%] text-xl leading-normal tracking-wide">
            With expertise in both front-end and back-end development, I create
            engaging and innovative user experiences by translating creative
            designs into fully functional websites and applications.
          </p>
        </div>

        <div id="skill-section" className="w-[80%] rounded-md box-border p-12 flex flex-col items-center gap-8">
          <div className="font-serif">
            {"i shape the perfect solutions".split("").map(char => (
              <h2 className="uppercase text-2xl font-medium text-[#dac5a7] tracking-wide inline">
              {char}
            </h2>
            ))}
            <p className="text-base tracking-tight">
              I build fast, reliable, and scalable websites to meet your needs.
              Like a steady stream, I handle challenges smoothly and deliver
              efficient digital experiences to help your business grow
            </p>
          </div>

          <div id="skills" className="w-full grid grid-cols-4 gap-8">
            <SkillCard icon={MonitorDot} title={`UI/UX\nDesigner`} />
            <SkillCard icon={ServerCog} title={"Backend\nDeveloper"} />
            <SkillCard icon={CodeXmlIcon} title={"Frontend\nDeveloper"} />
            <SkillCard icon={FaWordpressSimple} title={"Wordpress\nDeveloper"}/>
          </div>
        </div>

        <div id="projects-section" className="w-[80%] h-dvh bg-[#1d1d1d] rounded-md p-12 shadow-2xl flex flex-col items-center gap-8 box-border overflow-y-auto no-scrollbar">
          <h2
            className="font-serif text-8xl font-semibold uppercase text-shadow-lg sticky top-0"
            style={{ wordSpacing: "-1rem", letterSpacing: "-.3rem" }}
          >
            Latest Work
          </h2>
          {projectsData?.map((project) => (
            <ProjectCard
              key={project._id}
              title={project.name}
              image={project.thumbnail}
              link={project.slug}
            />
          ))}
        </div>

        <div id="contact-section" className="w-[80%] py-24 px-12 box-border rounded-b-4xl bg-[#1d1d1d] shadow-2xl flex flex-col items-center justify-center">
          <span className="font-serif text-8xl font-bold tracking-tight uppercase">
            get in touch
          </span>
          <div className="flex gap-1">
            <SocialButton
              icon={Mail}
              alt="Mail Icon"
              href="mailto:laksh.wadhwani55@gmail.com"
            />
            <SocialButton
              icon={Linkedin}
              alt="LinkedIn Icon"
              href="https://www.linkedin.com/in/lakshwadhwani/"
            />
            <SocialButton
              icon={Github}
              alt="Github Icon"
              href="https://github.com/laksh-wadhwani"
            />
            <SocialButton
              icon={Whatsapp}
              alt="Whatsapp Icon"
              href="https://wa.me/923072426590"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
