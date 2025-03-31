import { Eye, Github, Files } from "lucide-react";
import Tooltip from "../utilities/Tooltip";

export default function ProjectCard({ projects }) {
    return (
        <main className="w-[95%] h-auto mt-[20vh] flex flex-col mb-20 rounded-lg shadow-lg text-black">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="flex flex-row bg-white rounded-lg shadow-md mt-8"
                >
                    {/* Details Section */}
                    <div id="details" className="w-[50%] p-8 flex flex-col justify-between">
                        <div>
                            <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
                            <p className="text-sm text-gray-700">{project.description}</p>
                        </div>

                        <div className="mt-8">
                            <h1 className="text-xl font-semibold mb-2">Tools & Tech</h1>
                            <div className="flex items-center gap-4">
                                {project.tech.map((tech, techIndex) => (
                                    <img
                                        key={techIndex}
                                        className="w-6 h-6"
                                        src={tech.logo}
                                        alt={tech.name}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 flex items-center gap-6">

                            <Tooltip title="Demo">
                                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                    <Eye className="w-6 h-6 cursor-pointer" />
                                </a>
                            </Tooltip>

                            <Tooltip title="Code">
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="w-6 h-6 cursor-pointer" />
                                </a>
                            </Tooltip>

                            <Tooltip title="Docs">
                                <a href={project.links.files} target="_blank" rel="noopener noreferrer">
                                    <Files className="w-6 h-6 cursor-pointer" />
                                </a>
                            </Tooltip>

                        </div>
                    </div>

                    {/* Media Section */}
                    <div id="media" className="w-[50%] rounded-lg bg-gray-100 flex items-center justify-center">
                        <img
                            className="p-8"
                            src={project.media}
                            alt={`${project.title} Media`}
                        />
                    </div>
                </div>
            ))}
        </main>
    );
}