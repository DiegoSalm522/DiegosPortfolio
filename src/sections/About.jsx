import { useRef } from "react";
import Card from "../components/Card";
import Download from "../components/Download";

const About = () => {
  const grid2Container = useRef();
  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-8 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid1-color grid-1">
          <img
            src="assets/about/coding-pov.png"
            className="absolute scale-[1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:scale-[1] lg:scale-[1]"
          />
          {/* Overlay*/}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/20"></div>
          <div className="z-10">
            <p className="headtext">Hi, I'm Diego</p>
            <p className="text-neutral-200 text-sm md:text-base text-pretty">
              I am a Software Developer with strong experience in Frontend
              Development (React, JavaScript/TypeScript, HTML5, and CSS3).
              Skilled in designing responsive, accessible, and high-performance
              interfaces, integrating APIs, and collaborating in Agile teams
              while applying UI/UX best practices.
            </p>
          </div>
        </div>
        {/* Grid 2 */}
        <div className="grid2-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">COURSEWORK</p>
            <Card
              style={{ rotate: "-10deg", top: "5%", left: "0%" }}
              text="Software Development"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "40deg", top: "10%", left: "21%" }}
              text="OOP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-80deg", top: "45%", left: "0%" }}
              text="Frontend"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "80deg", top: "55%", left: "80%" }}
              text="Backend"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-60deg", top: "15%", left: "62%" }}
              text="Web Pages"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "35deg", top: "10%", left: "80%" }}
              text="Mobile Aplications"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "18deg", top: "61%", left: "22%" }}
              text="Video Games"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "80%", left: "0%" }}
              text="UI/UX"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "80%", left: "50%" }}
              text="Data Structures"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "60deg", top: "70%", left: "70%" }}
              text="Algorithms"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-5deg", top: "26%", left: "42%" }}
              text="Databases"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "5deg", top: "3%", left: "45%" }}
              text="AI"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-18deg", top: "61%", left: "45%" }}
              text="APIs"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "5deg", top: "82%", left: "22%" }}
              text="SCRUM"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid3-color grid-3">
          <div className="flex flex-col items-center justify-start my-auto">
            <p className="text-center text-black headtext">Education</p>
            <img
              src="assets/about/tec-logo.svg"
              className="w-30 h-30 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain my-2 mt"
            />
            <p className="text-center text-black text-sm sm:text-base">
              B.S. in Computer Science and Technology @ ITESM (2021-2025)
            </p>
          </div>
        </div>
        {/* Grid 4 */}
        <div className="grid4-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <Download />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
