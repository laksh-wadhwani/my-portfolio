import InputField from "../Components/InputField";
import InputFile from "../Components/InputFile";
import { Upload } from 'lucide-react';
import { useState } from "react";
import axios from "axios";
import { BackendURL } from "../BackendContext";
import { toast } from "sonner";
import Spinner from "../Components/LoadingSpinner";
import { useNavigate } from "react-router";

const Admin = ({token}) => {
  
  const API = BackendURL();
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    name: "",
    techStack: "",
    githubURL: "",
    liveURL: "",
    description: ""
  })
  const [thumbnail, setThumbnail] = useState(null)
  const [screenshots, setScreenshots] = useState([])

  const handleChange = (name, value) => {
    setData((prev => ({
      ...prev,
      [name]: value
    })))
  }

  const projectData = new FormData();
  projectData.append("name", data.name)
  projectData.append("techStack", data.techStack)
  projectData.append("githubURL", data.githubURL)
  projectData.append("liveURL", data.liveURL)
  projectData.append("description", data.description)
  projectData.append("thumbnail", thumbnail)
  screenshots.forEach(file => projectData.append("screenshots", file))

  const UploadProject = () => {
    setLoading(true)
    axios.post(`${API}/admin/upload`, projectData, {headers: {Authorization:`Bearer ${token}`}})
    .then(response => {
      toast.success(response.data.message)
      navigate("/")
    })
    .catch(error => {
      toast.error(error.response?.data?.message)
    })
    .finally(() => setLoading(false))
  }

  return (
    <div className="w-full pb-12 flex flex-col items-center">
      <div className="w-[80%] mt-32 bg-[#1d1d1d] border border-[#2c2c2c] rounded-md p-12 shadow-2xl flex flex-col gap-8">
        <h2 className="font-serif text-3xl">Add New Project</h2>
        <div className="grid grid-cols-2 gap-4 px-4">
          <InputField
            label="Project Tittle"
            type="text"
            placeholder={"Example Website"}
            onChange={e => handleChange("name", e.target.value)}
          />
          <InputField
            label={"Github Link"}
            type="text"
            placeholder={"https://github.com"}
            onChange={e => handleChange("githubURL", e.target.value)}
          />
          <InputField
            label={"Live Demo Link"}
            type="text"
            placeholder={"http://hostinglink"}
            onChange={e => handleChange("liveURL", e.target.value)}
          />
          <InputField
            label={"Tech Stack"}
            type="text"
            placeholder={"React, Express......"}
            onChange={e => handleChange("techStack", e.target.value)}
          />
          <InputFile label={"Project Thumbnail"} files={thumbnail} setFiles={setThumbnail}/>
          <InputFile label={"Project Screenshots"} multiple={true} files={screenshots} setFiles={setScreenshots} />
        </div>

        <textarea
          placeholder="Project Description..."
          rows="5"
          className="bg-transparent border border-[#2f2f2f] rounded-lg mx-4 px-4 py-3 outline-none focus:border-[#dac5a7] transition-all duration-300"
          onChange={e => handleChange("description", e.target.value)}
        />

        <button 
        className="w-fit px-4 py-3 bg-[#dac5a7] border shadow-xl flex gap-2 items-center text-black rounded-lg font-serif hover:scale-102 transition-all duration-500 ease-in-out hover:bg-transparent hover:border-[#dac5a7] hover:text-white"
        onClick={UploadProject} disabled={loading}>
          <Spinner icon={Upload} text="Upload" loading={loading}/>
        </button>
      </div>
    </div>
  );
};

export default Admin;
