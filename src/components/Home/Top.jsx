import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Top() {
    const navigate = useNavigate();

    return (
        <div className="fixed top-0 left-0 w-full h-[10%] flex justify-between items-center z-50">
            <div
                className="h-12 w-12 ml-4 group cursor-pointer"
                onClick={() => navigate("/")}
            >
                <img src="/dp.png" alt="profile pic" className="border-[0.5px] border-black cursor-pointer h-full w-full object-cover rounded-full transition-transform duration-250 ease-in-out group-hover:scale-300 group-hover:translate-x-10 group-hover:translate-y-10" />
            </div>
            <a href="https://docs.google.com/document/d/1ai3JWBHrJK2-ZPAL2Ju6yBPYN3_Ujb8DdxSYg7pjWTo/edit?usp=sharing" target="_blank" rel="noopener noreferrer"
                className="relative inline-flex overflow-hidden rounded-full p-[1px] mr-4 focus:outline-none min-w-[90px] md:min-w-[110px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 text-xs font-medium text-black backdrop-blur-3xl gap-2 transition-all duration-200 md:text-sm md:px-4 md:py-1.5 hover:bg-neutral-100">
                    <ExternalLink size={16} className="block md:hidden" />
                    <ExternalLink size={18} className="hidden md:block" /> Resume
                </span>
            </a>
        </div>
    );
}