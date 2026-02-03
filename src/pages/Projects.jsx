import Bottom from "../components/Home/Bottom";
import Top from "../components/Home/Top";
import ProjectCard from "../components/ProjectCard";
import Dock from "@/components/Dock";
import useIsLaptopOrLarger from "../lib/useIsLaptopOrLarger";
import { useNavigate } from "react-router-dom";
import { NAV_ITEMS, SOCIAL_LINKS } from "../lib/constants";

const projects = [
  {
    title: "Specora",
    description:
      "An AI assisted requirements engineering platform. All activities of requirements engineering in a single platform with AI features.",
    tech: [
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Node.js", logo: "https://nodejs.org/static/logos/jsIconGreen.svg" },
    ],
    media: "/specora.png",
    links: {
      live: "https://specora.vercel.app/",
      github: "https://github.com/Rehman-codes/",
      files: "#",
    },
  },
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

  const navItems = NAV_ITEMS.map((item) => ({
    icon: <item.icon size={18} />,
    label: item.label,
    onClick: () => navigate(item.path),
  }));

  const socialItems = SOCIAL_LINKS.map((item) => ({
    icon: <item.icon size={18} />,
    label: item.label,
    onClick: () => window.open(item.url, "_blank"),
  }));

  const items = [...navItems, ...socialItems];

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
