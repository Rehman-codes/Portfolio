import { Download } from "lucide-react";

export default function Top() {

    return (
        <div className="absolute top-0 left-0 w-full h-[10%] flex justify-between items-center">
            <div className="h-12 w-12 ml-4">
                <img src="/dp.png" alt="profile pic" className="cursor-pointer h-full w-full object-cover rounded-full" />
            </div>
            <button className="flex flex-row items-center justify-center gap-2 mr-8 p-4 bg-white text-black rounded-3xl h-[60%] w-[9%] cursor-pointer"><Download size={24} /> Resume</button>
        </div>
    );
}