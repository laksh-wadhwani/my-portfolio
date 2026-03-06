import ProjectsTable from "../Models/Projects.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";
import generateSlug from "../utils/slug.js";

export const UploadProject = async (request, response) => {
  try {
    const { name, techStack, githubURL, liveURL, description } = request.body;

    if (!request.files.thumbnail)
      return response
        .status(400)
        .json({ message: "Please upload thumbnail. It is mandatory" });

    if (!(githubURL || liveURL))
      return response
        .status(400)
        .json({ message: "Github or Live URL is mandatory" });

    const projectCheck = await ProjectsTable.findOne({ name });
    if (projectCheck)
      return response.status(409).json({ message: "Project already exists" });

    const slug = generateSlug(name);
    const tech_stack = techStack.split(",").map((field) => field.trim());
    const thumbnail = await uploadToCloudinary(
      request.files.thumbnail[0].buffer,
    );
    const projectImages = request.files.screenshots.map((file) =>
      uploadToCloudinary(file.buffer),
    );
    const screenshots = await Promise.all(projectImages);

    const project = new ProjectsTable({
      name,
      slug,
      tech_stack,
      github_url: githubURL,
      live_url: liveURL,
      thumbnail,
      screenshots,
      description,
    });

    await project.save();
    return response
      .status(201)
      .json({ message: "Project uploaded successfully" });
  } catch (error) {
    console.error("Getting error in while uploading project: ", error);
    return response.status(500).json({ message: "Internal Server Error" });
  }
};

export const GetProjectsData = async (request, response) => {
  try {
    const projects = await ProjectsTable.find();
    if (!projects)
      return response
        .status(201)
        .json({ success: false, message: "There are no projects uploaded" });

    return response.status(200).json(projects);
  } catch (error) {
    console.error("Getting error in fetching projects data: ", error);
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

export const GetProjectDetail = async (request, response) => {
  try {
    const { slug } = request.params;
    const project = await ProjectsTable.findOne({ slug });
    return response.status(202).json(project);
  } catch (error) {
    console.error(
      "Getting error in while fetching specific project detail: ",
      error,
    );
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

export const DeleteProject = async (request, response) => {
  try {
    const { slug } = request.params;
    const project = await ProjectsTable.findOneAndDelete({ slug });

    if (!project)
      return response.status(401).json({ message: "Project didn't exist" });

    return response
      .status(200)
      .json({ message: "Project deleted successfully" });
  } catch (error) {
    console.log("Getting error while deleting the project: ", error);
    return response.status(500).json({ message: "Internal Server Error" });
  }
};
