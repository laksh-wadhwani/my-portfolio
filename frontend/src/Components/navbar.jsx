import React from "react";
import { FaMessage } from "react-icons/fa6";
import { LogOut } from "lucide-react";
import NavPicture from "../assets/nav-picture.jpeg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import IconButton from "./IconButton.jsx";
import { useNavigate } from "react-router";

const Navbar = ({ token, setToken }) => {
  const navigate = useNavigate();
  const LogOutFunction = () => {
    sessionStorage.removeItem("token");
    setToken(null);
    navigate("/auth");
  };

  const handleImage = () => {
    const heroSection = document.querySelector("#hero-section");
    if (heroSection) heroSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleProject = () => {
    const projectSection = document.querySelector("#projects-section");
    if (projectSection) projectSection.scrollIntoView({ behavior: "smooth" });
  };

  useGSAP(() => {
    gsap.from("#navbar", {
      y: -60,
      opacity: 0,
      duration: 1.1,
      delay: 0.2,
    });
  });

  return (
    <React.Fragment>
      <div
        id="navbar"
        className="w-[80%] h-fit flex justify-between mt-8 justify-self-center flex justify-between items-center fixed z-100"
      >
        <div className="group flex items-center shadow-lg rounded-md bg-[#2b2b2b] overflow-hidden cursor-pointer transition-all duration-500 ease-in-out gap-3 p-2 w-14 hover:w-34">
          <button className="size-10 shrink-0 overflow-hidden bg-white text-black font-bold rounded-full text-2xl flex items-center justify-center cursor-pointer transition-all duration-500">
            <img
              src={NavPicture}
              alt="My Picture"
              onClick={handleImage}
              className="size-full object-cover object-center grayscale brightness-100 group-hover:grayscale-0"
            />
          </button>
          <span
            className="font-serif text-lg whitespace-nowrap opacity-0 translate-x-[-10px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 hover:text-[#dac5a7]"
            onClick={handleProject}
          >
            Projects
          </span>
        </div>

        {token ? (
          <IconButton icon={LogOut} onClick={LogOutFunction} />
        ) : (
          <IconButton icon={FaMessage} to={"https://wa.me/923072426590"} />
        )}
      </div>
    </React.Fragment>
  );
};

export default Navbar;
