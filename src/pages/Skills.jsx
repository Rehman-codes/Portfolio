import Bottom from "../components/Home/Bottom";
import Top from "../components/Home/Top";
import { OrbitingCircles } from "@/components/magicui/OrbitingCircles";
import Dock from "@/components/Dock";
import useIsLaptopOrLarger from "../lib/useIsLaptopOrLarger";
import { useNavigate } from "react-router-dom";
import { NAV_ITEMS, SOCIAL_LINKS } from "../lib/constants";

export default function Skills() {
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
    <section className="w-full min-h-screen bg-black flex flex-col md:flex-row relative">
      <Top />

      <div className="flex justify-center items-center w-full flex-1 relative overflow-hidden py-10">
        {/* Mobile: 3-column grid Skills Icon layout */}
        <div className="grid grid-cols-3 gap-x-6 gap-y-6 w-full px-4 md:hidden justify-items-center">
          <img className="h-[30px] w-[30px] active:scale-110 transition-transform" src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png" alt="HTML" />
          <img className="h-[30px] w-[30px] active:scale-110 transition-transform" src="https://cdn-icons-png.flaticon.com/128/732/732190.png" alt="CSS" />
          <img className="h-[30px] w-[30px] active:scale-110 transition-transform" src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="JS" />
          <img className="h-[30px] w-[30px] active:scale-110 transition-transform" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React.js" />
          <img className="h-[30px] w-[30px] active:scale-110 transition-transform" src="https://nodejs.org/static/logos/jsIconGreen.svg" alt="Node.js" />
          <img className="h-[36px] w-[36px] active:scale-110 transition-transform" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfOeXNQhzCafkrYF4fpSjpQfzHYBiiGd1P_A&s" alt="Express.js" />
          <img className="h-[30px] w-[30px] active:scale-110 transition-transform" src="./mongoDB.svg" alt="MongoDB" />
          <img className="h-[30px] w-[30px] active:scale-110 transition-transform" src="/firebase.svg" alt="Firebase" />
          <img className="h-[30px] w-[30px] active:scale-110 transition-transform" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git" />
          <img className="h-[30px] w-[30px] active:scale-110 transition-transform" src="https://cdn-icons-png.flaticon.com/128/2504/2504911.png" alt="Github" />
        </div>
        {/* Desktop/Tablet: Orbiting Circles, perfectly contained */}
        <div className="hidden md:flex w-full h-full items-center justify-center">
          <div className="relative overflow-hidden rounded-full bg-[rgba(0,0,0,0.07)] max-w-md max-h-[420px] w-full h-full aspect-square flex items-center justify-center">
            {/* Orbiting Circles Layer 1 */}
            <OrbitingCircles radius={50}>
              <img className="h-[20px] w-[20px] sm:h-[25px] sm:w-[25px]" src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png" alt="HTML" />
              <img className="h-[20px] w-[20px] sm:h-[25px] sm:w-[25px]" src="https://cdn-icons-png.flaticon.com/128/732/732190.png" alt="CSS" />
              <img className="h-[20px] w-[20px] sm:h-[25px] sm:w-[25px]" src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="JS" />
            </OrbitingCircles>
            {/* Orbiting Circles Layer 2 */}
            <OrbitingCircles radius={120} reverse>
              <img className="h-[20px] w-[20px] sm:h-[25px] sm:w-[25px]" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React.js" />
              <img className="h-[20px] w-[20px] sm:h-[25px] sm:w-[25px]" src="https://nodejs.org/static/logos/jsIconGreen.svg" alt="Node.js" />
              <img className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfOeXNQhzCafkrYF4fpSjpQfzHYBiiGd1P_A&s" alt="Express.js" />
              <img className="h-[20px] w-[20px] sm:h-[25px] sm:w-[25px]" src="./mongoDB.svg" alt="MongoDB" />
            </OrbitingCircles>
            {/* Orbiting Circles Layer 3 */}
            <OrbitingCircles radius={180}>
              <img className="h-[20px] w-[20px] sm:h-[25px] sm:w-[25px]" src="/firebase.svg" alt="Firebase" />
              <img className="h-[20px] w-[20px] sm:h-[25px] sm:w-[25px]" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git" />
              <img className="h-[20px] w-[20px] sm:h-[25px] sm:w-[25px]" src="https://cdn-icons-png.flaticon.com/128/2504/2504911.png" alt="Github" />
            </OrbitingCircles>
          </div>
        </div>
      </div>

      {/* <Bottom /> */}
      {/* Responsive Navigation */}
      {isLaptopOrLarger ? (
        <Dock
          items={items}
          panelHeight={50}
          baseItemSize={30}
          magnification={70}
        />
      ) : (
        <Bottom />
      )}
    </section>
  );
}
