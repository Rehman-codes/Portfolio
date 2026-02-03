import Bottom from "../components/Home/Bottom";
import Top from "../components/Home/Top";
import Dock from "@/components/Dock";
import useIsLaptopOrLarger from "../lib/useIsLaptopOrLarger";
import { useNavigate } from "react-router-dom";
import { NAV_ITEMS, SOCIAL_LINKS } from "../lib/constants";

export default function Experience() {
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

  const experiences = [
    {
      title: "Web Development Intern",
      company: "Bookme, NASTP Lahore",
      year: "2025",
      duration: "19 Jun 2025 – 15 Aug 2025",
      details: [
        "Contributed to the Back Office App as a frontend developer",
        "Designed and developed features using Nuxt.js framework"
      ]
    },

  ];

  return (
    <section className="w-screen h-screen bg-black flex flex-col md:flex-row relative">
      <Top />

      <div className="flex flex-1 items-center justify-center">
        <div className="max-w-md w-full">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:scale-102">
            <div className="flex flex-col items-center justify-center mb-4">
              <img src="/bookme_logo.png" alt="Bookme Logo" className="w-32 h-auto mb-2 object-contain" />
            </div>
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl p-5 border border-white/10 mb-2">
                <h3 className="text-lg font-semibold text-indigo-200 flex items-center mb-2">
                  <span className="mr-2">{exp.title}</span>
                  <span className="inline-block px-2 py-1 text-xs bg-white rounded text-black">{exp.year}</span>
                </h3>
                <p className="text-sm mb-1 text-white/80">{exp.company}</p>
                <p className="text-xs mb-4 text-indigo-100">{exp.duration}</p>
                <ul className="list-disc pl-5 text-base space-y-1">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="text-white/90">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

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
