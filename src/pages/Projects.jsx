import Bottom from "../components/Home/Bottom";
import Top from "../components/Home/Top";
import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        title: "GradWiz",
        description: "GradWiz is an app specifically developed for undergraduates to manage their assessments throughout the Semester. A single platform where they can manage their projects, assignments, quizzes, exams. It uses Firebase for authentication and data storage. Gmail, Drive and GCR APIs are used to streamline the workflow. ",
        tech: [
            { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
            { name: "Firebase", logo: "/firebase.svg" },],
        media: "/gradwiz.png",
        links: {
            live: "https://gradwiz.vercel.app",
            github: "https://github.com/Rehman-codes/GradWiz",
            files: "https://drive.google.com/drive/folders/14vIpN4kjbi8hcL9V8kzZJ0nPdOVCbpOV?usp=sharing",
        },
    },
    {
        title: "Phone Directory",
        description: "An app that stores and manages phone numbers with names. The goal was to learn the architecture of MERN stack and the communication between FE, BE and DB. I also learned basic deployment on platforms such as Vercel and Render. ",
        tech: [
            { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
            { name: "Node", logo: "https://nodejs.org/static/logos/jsIconGreen.svg" },
            { name: "Express", logo: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png" },
            { name: "MongoDB", logo: "/mongoDB.svg" },
        ],
        media: "/phoneDir.png",
        links: {
            live: "https://phone-directory-pk.vercel.app/",
            github: "https://github.com/Rehman-codes/Phone-Directory",
            files: "#",
        },
    },
];

export default function Projects() {
    return (
        <section className="w-full h-auto bg-black flex flex-col items-center overflow-x-hidden">
            <Top />

            {/* Pass the projects array as a prop */}
            <ProjectCard projects={projects} />

            <Bottom />
        </section>
    );
}