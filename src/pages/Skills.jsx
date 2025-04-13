import Bottom from "../components/Home/Bottom"
import Top from "../components/Home/Top";
import { OrbitingCircles } from "@/components/magicui/OrbitingCircles";

export default function Skills() {

    return (

        <section className="w-screen h-screen bg-black flex flex-col md:flex-row relative">

            <Top />

            <div className="flex justify-center items-center w-full h-full relative overflow-hidden">

                <OrbitingCircles radius={70}>
                    <img className="h-[25px] w-[25px]" src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png" alt="HTML" />
                    <img className="h-[25px] w-[25px]" src="https://cdn-icons-png.flaticon.com/128/732/732190.png" alt="CSS" />
                    <img className="h-[25px] w-[25px]" src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="JS" />
                </OrbitingCircles>

                <OrbitingCircles radius={170} reverse>
                    <img className="h-[25px] w-[25px]" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React.js" />
                    <img className="h-[25px] w-[25px]" src="https://nodejs.org/static/logos/jsIconGreen.svg" alt="Node.js" />
                    <img className="h-[20px] w-[20px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfOeXNQhzCafkrYF4fpSjpQfzHYBiiGd1P_A&s" alt="Express.js" />
                    <img className="h-[25px] w-[25px]" src="./mongoDB.svg" alt="MongoDB" />
                </OrbitingCircles>

                <OrbitingCircles radius={250}>
                    <img className="h-[25px] w-[25px]" src="/firebase.svg" alt="Firebase" />
                    <img className="h-[25px] w-[25px]" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git" />
                    <img className="h-[25px] w-[25px]" src="https://cdn-icons-png.flaticon.com/128/2504/2504911.png" alt="Github" />
                </OrbitingCircles>

            </div>

            <Bottom />

        </section>

    )

}