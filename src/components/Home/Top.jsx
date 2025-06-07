import { Download } from "lucide-react";

export default function Top() {

    return (
        <div className="fixed top-0 left-0 w-full h-[10%] flex justify-between items-center">
            <div className="h-12 w-12 ml-4 group">
                <img src="/dp.png" alt="profile pic" className="border-[0.5px] border-black cursor-pointer h-full w-full object-cover rounded-full transition-transform duration-250 ease-in-out group-hover:scale-300 group-hover:translate-x-10 group-hover:translate-y-10" />
            </div>
            <a href="https://1drv.ms/w/c/aca42ed92d4d30f1/ER6pWwsNyKRGmxpawGeEzRYB-0K7kOy5yF9Cn_hYYpe3uQ" target="_blank" className="border-[0.5px] border-black flex flex-row items-center justify-center gap-2 mr-8 p-4 bg-white text-black rounded-3xl h-[60%] w-[9%] cursor-pointer"><Download size={24} /> Resume</a>
        </div>
    );
}