import Bottom from "../components/Home/Bottom";
import Top from "../components/Home/Top";
import ProjectCard from "../components/ProjectCard";
import Dock from "@/components/Dock";
import useIsLaptopOrLarger from "../lib/useIsLaptopOrLarger";
import { useNavigate } from "react-router-dom";
import {
  FolderOpen,
  Palette,
  Briefcase,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Home as HomeIcon,
} from "lucide-react";

const projects = [
  {
    title: "GradWiz",
    description:
      "GradWiz is an app specifically developed for undergraduates to manage their assessments throughout the Semester. A single platform where they can manage their projects, assignments, quizzes, exams. It uses Firebase for authentication and data storage. Gmail, Drive and GCR APIs are used to streamline the workflow. ",
    tech: [
      {
        name: "React",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      { name: "Firebase", logo: "/firebase.svg" },
    ],
    media: "/gradwiz.png",
    links: {
      live: "https://gradwiz.vercel.app",
      github: "https://github.com/Rehman-codes/GradWiz",
      files:
        "https://drive.google.com/drive/folders/14vIpN4kjbi8hcL9V8kzZJ0nPdOVCbpOV?usp=sharing",
    },
  },
  {
    title: "Stockar",
    description:
      "This is the Manager Service of an Inventory Management System build in collaboration with my fellow engineers as the semester project of Web Engineering.",
    tech: [
      {
        name: "React",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      { name: "Node", logo: "https://nodejs.org/static/logos/jsIconGreen.svg" },
      {
        name: "Express",
        logo: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png",
      },
      { name: "MongoDB", logo: "/mongoDB.svg" },
    ],
    media: "/stockar.png",
    links: {
      live: "https://stockar.vercel.app/",
      github: "https://github.com/Rehman-codes/WE-Project",
      files:
        "https://drive.google.com/drive/folders/1CS6Z9iIowdxEaxpaQwBruHZrjednIJMg?usp=sharing",
    },
  },
  {
    title: "Phone Directory",
    description:
      "An app that stores and manages phone numbers with names. The goal was to learn the architecture of MERN stack and the communication between FE, BE and DB. I also learned basic deployment on platforms such as Vercel and Render. ",
    tech: [
      {
        name: "React",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      { name: "Node", logo: "https://nodejs.org/static/logos/jsIconGreen.svg" },
      {
        name: "Express",
        logo: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png",
      },
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
  const isLaptopOrLarger = useIsLaptopOrLarger();
  const navigate = useNavigate();

  const items = [
    {
      icon: <HomeIcon size={18} />,
      label: "Home",
      onClick: () => navigate("/"),
    },
    {
      icon: <FolderOpen size={18} />,
      label: "Projects",
      onClick: () => navigate("/projects"),
    },
    {
      icon: <Palette size={18} />,
      label: "Skills",
      onClick: () => navigate("/skills"),
    },
    {
      icon: <Briefcase size={18} />,
      label: "Experience",
      onClick: () => navigate("/experience"),
    },
    {
      icon: <Github size={18} />,
      label: "GitHub",
      onClick: () => window.open("https://github.com/Rehman-codes", "_blank"),
    },
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      onClick: () =>
        window.open("https://www.linkedin.com/in/abdurrehman-swe", "_blank"),
    },
    {
      icon: <Mail size={18} />,
      label: "Email",
      onClick: () =>
        window.open("https://mail.google.com/mail/?view=cm&to=abdurrehman.swe@gmail.com", "_blank"),
    },
    {
      icon: <Instagram size={18} />,
      label: "Instagram",
      onClick: () =>
        window.open("https://www.instagram.com/svelto.co", "_blank"),
    },
  ];

  return (
  <section className="w-full h-auto bg-black flex flex-col items-center overflow-x-hidden relative">
      <Top />

      {/* Pass the projects array as a prop */}
      <ProjectCard projects={projects} />

      {/* Responsive Navigation */}
      {isLaptopOrLarger ? (
        <Dock
          items={items}
          panelHeight={50}
          baseItemSize={30}
          magnification={70}
          className="fixed z-50"
        />
      ) : (
        <Bottom />
      )}
    </section>
  );
}
