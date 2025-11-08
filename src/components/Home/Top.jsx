import { ExternalLink } from "lucide-react";

export default function Top() {

    return (
        <div className="fixed top-0 left-0 w-full h-[10%] flex justify-between items-center">
            <div className="h-12 w-12 ml-4 group">
                <img src="/dp.png" alt="profile pic" className="border-[0.5px] border-black cursor-pointer h-full w-full object-cover rounded-full transition-transform duration-250 ease-in-out group-hover:scale-300 group-hover:translate-x-10 group-hover:translate-y-10" />
            </div>
            <a href="https://1drv.ms/w/c/331901dc76d100f5/ERqwnSoz5iJPumnjoDRwesgBmnvIaZBF4Rzt8wOoKRNl1A?e=bgvAfZ" target="_blank" rel="noopener noreferrer"
                className="border-[0.5px] border-black flex flex-row items-center justify-center gap-2 mr-4 min-w-[110px] w-auto h-auto px-4 py-2 md:min-w-[130px] md:px-6 md:py-2 bg-white text-black rounded-3xl cursor-pointer text-sm font-medium md:text-lg hover:bg-neutral-200 hover:shadow transition-all duration-200">
                <ExternalLink size={20} className="block md:hidden" />
                <ExternalLink size={24} className="hidden md:block" /> Resume
            </a>
        </div>
    );
}