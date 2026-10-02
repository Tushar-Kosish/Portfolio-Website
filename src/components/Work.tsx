import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              name: "SmartEvacai",
              category: "SIH Winner • Disaster Evacuation AI",
              tools: "React, SAP BTP, Scenario Planning, Routing API, GIS Maps",
              image: "./images/automation.png",
              link: "https://github.com/Tushar-Kosish/SmartEvacai"
            },
            {
              name: "ArchoTech AI",
              category: "AI Generative Architectural Studio",
              tools: "Three.js (WebGL), HTML5 Canvas, Generative Design, ESG Engine",
              image: "./images/ecommerce.png",
              link: "https://github.com/Tushar-Kosish/Archo-tech"
            },
            {
              name: "Draftdeckai",
              category: "AI Document & Content Suite",
              tools: "React, TypeScript, AI Generation APIs, Rollup",
              image: "./images/automation.png",
              link: "https://github.com/Tushar-Kosish/Draftdeckai"
            },
            {
              name: "ZerithDB",
              category: "High-Performance Database Engine",
              tools: "TypeScript, Node.js, Custom Storage B-Trees",
              image: "./images/ecommerce.png",
              link: "https://github.com/Tushar-Kosish/ZerithDB"
            },
            {
              name: "3D Portfolio",
              category: "Interactive WebGL Developer Site",
              tools: "Three.js, React-Three-Fiber, GSAP, Vite, Glassmorphism",
              image: "./images/automation.png",
              link: "https://github.com/Tushar-Kosish/Portfolio-Website"
            }
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
