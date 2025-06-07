import Spline from "@splinetool/react-spline";
import Top from "../components/Home/Top";
import Bottom from "../components/Home/Bottom";

export default function Home() {
    return (
        <section className="w-screen h-screen bg-black flex flex-col md:flex-row justify-center items-center relative">

            {/* Intro Section */}
            <div id="intro" className="w-full md:w-[50%] flex flex-col justify-center items-center px-4 md:px-0">
                <div className="w-full md:w-[75%] flex flex-col text-center md:text-left">
                    <h1 id="name" className="text-white text-5xl md:text-9xl font-bold">
                        Abdur Rehman
                    </h1>
                    <p id="description" className="mt-2 text-white font-thin text-base md:text-lg">
                        Software Engineer | Full Stack Web Developer
                    </p>
                </div>
            </div>

            {/* Spline 3D Model */}
            <div className="w-full md:w-[50%] h-[50%] md:h-full flex justify-center items-center relative">
                <Spline
                    scene="https://prod.spline.design/UgiBiSGLOhQqrvaP/scene.splinecode"
                    className="w-full h-full"
                />
                <div className="absolute bottom-0 right-0 w-40 h-16 bg-black"></div>
            </div>

            {/* Top Navbar */}
            <Top />

            {/* Bottom Navbar */}
            <Bottom />

        </section>
    );
}