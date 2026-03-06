import { IoArrowRedoOutline } from "react-icons/io5";
import IconButton from "./IconButton";

const ProjectCard = ({ title, image, link }) => {
  return (
    <div className="w-full h-[85dvh] rounded-2xl shadow-2xl sticky top-1">

      {/* Top Bar */}
      <div className="w-full h-[15%] p-6 flex items-center justify-between bg-[#353535] rounded-t-2xl">

        <span className="font-medium font-serif text-2xl tracking-tight">
          {title}
        </span>

        <IconButton icon={IoArrowRedoOutline} to={`/project/${link}`} size={24} />
      </div>

      {/* Image Section */}
      <div className="w-full h-[85%] rounded-b-2xl">
        <img
          src={image}
          alt={`${title} Thumbnail`}
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
};

export default ProjectCard;