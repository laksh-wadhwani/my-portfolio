import React, { useEffect, useState } from "react";
import { FaWordpressSimple } from "react-icons/fa";
import { CodeXmlIcon, MonitorDot, ServerCog } from "lucide-react";
import SkillCard from "../Components/SkillCard";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Mail from "../assets/mail.svg"
import ProjectCard from "../Components/ProjectCard";
import SocialButton from "../Components/SocialButton";
import axios from "axios"
import { BackendURL } from "../BackendContext";


const LandingPage = () => {
    
    const API = BackendURL();
    const [projectsData, setProjectsData] = useState([])

    useEffect(() => {
        axios.get(`${API}/admin/get-projects-data`)
        .then(response => setProjectsData(response.data))
        .catch(error => console.error("Getting error while fetching projects details: ",error))
    },[projectsData])

    return (
        <React.Fragment>
            <div className="w-full flex flex-col gap-40 items-center pb-20">

                <div className="h-dvh w-full bg-[url(main-picture.png)] bg-position-[0] bg-no-repeat bg-[#1a1a1a] bg-blend-lighten flex flex-col justify-center items-center text-[#dac5a7] text-center">
                    <span className="text-5xl font-extralight font-garamod mb-3">Laksh</span>
                    <h1 className="text-8xl font-bold font-atkinson mb-4">Full Stack Dev.</h1>
                    <p className="text-2xl font-atkinson">Elevating digital experiences through code. Explore my portfolio to see <br/> innovation in action.</p>
                </div>

                <div className="w-[80%] flex items-center gap-16 bg-[#1d1d1d] py-24 px-12 shadow-2xl font-serif rounded-t-4xl box-border">
                    <p className="w-[50%] text-4xl font-semibold leading-normal tracking-tight">Hi, I'm Laksh Wadhwani, a designer and full-stack developer based in Karachi.</p>
                    <p className="w-[50%] text-xl leading-normal tracking-wide">With expertise in both front-end and back-end development, I create engaging and innovative user experiences by translating creative designs into fully functional websites and applications.</p>
                </div>

                <div className="w-[80%] bg-[#1d1d1d] shadow-2xl rounded-md box-border p-12 flex flex-col items-center gap-8">
                    
                    <div className="font-serif">
                        <h2 className="uppercase text-2xl font-medium text-[#dac5a7] tracking-wide">i shape the perfect solutions</h2>
                        <p className="text-base tracking-tight">I build fast, reliable, and scalable websites to meet your needs. Like a steady stream, I handle challenges smoothly and deliver efficient digital experiences to help your business grow</p>
                    </div>

                    <div className="w-full grid grid-cols-4 gap-8">

                        <SkillCard icon={MonitorDot} title={`UI/UX\nDesigner`}/>
                        <SkillCard icon={ServerCog} title={"Backend\nDeveloper"}/>
                        <SkillCard icon={CodeXmlIcon} title={"Frontend\nDeveloper"}/>
                        <SkillCard icon={FaWordpressSimple } title={"Wordpress\nDeveloper"}/>

                    </div>

                </div>

                <div className="w-[80%] h-dvh bg-[#1d1d1d] rounded-md p-12 shadow-2xl flex flex-col items-center box-border">
                    <h2 className="font-serif text-8xl font-semibold uppercase text-shadow-lg sticky top-4" style={{wordSpacing: "-1rem", letterSpacing: "-.3rem"}}>Latest Work</h2>

                    <div className="w-[70%] h-full flex flex-col flex-nowrap items-center gap-10 overflow-auto no-scrollbar">
                        {projectsData.map(project => (
                            <ProjectCard key={project._id} title={project.name} image={project.thumbnail} link={project.slug} />
                        ))}
                    </div>

                </div>

                <div className="w-[80%] py-24 px-12 box-border rounded-b-4xl bg-[#1d1d1d] shadow-2xl flex flex-col items-center justify-center">
                    <span className="font-serif text-8xl font-bold tracking-tight uppercase">get in touch</span>
                    <div className="flex gap-1">
                        <SocialButton icon={Mail} alt="Mail Icon" href="mailto:laksh.wadhwani55@gmail.com"/>
                        <SocialButton icon={Linkedin} alt="LinkedIn Icon" href="https://www.linkedin.com/in/lakshwadhwani/"/>
                        <SocialButton icon={Github} alt="Github Icon" href="https://github.com/laksh-wadhwani"/>
                        <SocialButton icon={Whatsapp} alt="Whatsapp Icon" href="https://wa.me/923072426590" />
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default LandingPage