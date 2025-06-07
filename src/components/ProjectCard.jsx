import { Eye, Github, Files } from "lucide-react";
import Tooltip from "../utilities/Tooltip";

export default function ProjectCard({ projects }) {
    return (
        <main className="w-[90%] md:w-[85%] lg:w-[75%] h-auto mt-[10vh] flex flex-col mb-20 rounded-lg shadow-lg text-black mx-auto">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md mt-8"
                >
                    {/* Details Section */}
                    <div className="w-full lg:w-[50%] p-6 md:p-8 flex flex-col justify-between">
                        <div>
                            <h1 className="text-xl md:text-2xl font-bold mb-4">{project.title}</h1>
                            <p className="text-sm md:text-base text-gray-700">{project.description}</p>
                        </div>

                        <div className="mt-6 md:mt-8">
                            <h1 className="text-lg md:text-xl font-semibold mb-2">Tools & Tech</h1>
                            <div className="flex flex-wrap items-center gap-4">
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

                        <hr className="mt-8" />

                        <div className="mt-6 md:mt-8 flex items-center gap-6">
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
                    <div className="w-full lg:w-[50%] bg-gray-100 flex items-center justify-center rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none">
                        <img
                            className="p-6 md:p-8 max-w-full h-auto object-contain"
                            src={project.media}
                            alt={`${project.title} Media`}
                        />
                    </div>
                </div>
            ))}
        </main>
    );
}
