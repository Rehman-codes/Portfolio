import Spline from "@splinetool/react-spline";
import Top from "../components/Home/Top";
import Bottom from "../components/Home/Bottom";
import TextPressure from "../components/Text/TextPressure";
import TextType from "../components/Text/TextType";

export default function Home() {
  return (
    <section className="w-screen h-screen bg-black flex flex-col md:flex-row justify-center items-center relative">
      {/* Intro Section */}
      <div
        id="intro"
        className="w-full md:w-[50%] flex flex-col justify-center items-center px-4 md:px-0"
      >
        <div className="w-full md:w-[75%] flex flex-col text-center md:text-left">
          <div style={{ position: "relative", height: "210px" }}>
            <TextPressure
              text="Abdur"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={36}
            />
          </div>
          <div style={{ position: "relative", height: "210px" }}>
            <TextPressure
              text="Rehman"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={36}
            />
          </div>
          <TextType
            text={["Software Engineer", "Full Stack Web Developer"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
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