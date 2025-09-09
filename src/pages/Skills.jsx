import Bottom from "../components/Home/Bottom";
import Top from "../components/Home/Top";
import { OrbitingCircles } from "@/components/magicui/OrbitingCircles";
import Dock from "@/components/Dock";
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

export default function Skills() {
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
    <section className="w-full min-h-screen bg-black flex flex-col md:flex-row relative">
      <Top />

      <div className="flex justify-center items-center w-full flex-1 relative overflow-hidden py-10">
        {/* Orbiting Circles Layer 1 */}
        <OrbitingCircles radius={50}>
          <img
            className="h-[20px] w-[20px] sm:h-[25px] sm:w-[25px]"
            src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png"
            alt="HTML"
          />
          <img
            className="h-[20px] w-[20px] sm:h-[25px] sm:w-[25px]"
            src="https://cdn-icons-png.flaticon.com/128/732/732190.png"
            alt="CSS"
          />
          <img
            className="h-[20px] w-[20px] sm:h-[25px] sm:w-[25px]"
            src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
            alt="JS"
          />
        </OrbitingCircles>

        {/* Orbiting Circles Layer 2 */}
        <OrbitingCircles radius={120} reverse>
          <img
            className="h-[20px] w-[20px] sm:h-[25px] sm:w-[25px]"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React.js"
          />
          <img
            className="h-[20px] w-[20px] sm:h-[25px] sm:w-[25px]"
            src="https://nodejs.org/static/logos/jsIconGreen.svg"
            alt="Node.js"
          />
          <img
            className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfOeXNQhzCafkrYF4fpSjpQfzHYBiiGd1P_A&s"
            alt="Express.js"
          />
          <img
            className="h-[20px] w-[20px] sm:h-[25px] sm:w-[25px]"
            src="./mongoDB.svg"
            alt="MongoDB"
          />
        </OrbitingCircles>

        {/* Orbiting Circles Layer 3 */}
        <OrbitingCircles radius={180}>
          <img
            className="h-[20px] w-[20px] sm:h-[25px] sm:w-[25px]"
            src="/firebase.svg"
            alt="Firebase"
          />
          <img
            className="h-[20px] w-[20px] sm:h-[25px] sm:w-[25px]"
            src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
            alt="Git"
          />
          <img
            className="h-[20px] w-[20px] sm:h-[25px] sm:w-[25px]"
            src="https://cdn-icons-png.flaticon.com/128/2504/2504911.png"
            alt="Github"
          />
        </OrbitingCircles>
      </div>

      {/* <Bottom /> */}
      <Dock
        items={items}
        panelHeight={50}
        baseItemSize={30}
        magnification={70}
      />
    </section>
  );
}
