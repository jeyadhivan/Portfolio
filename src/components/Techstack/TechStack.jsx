import React from "react";
import "./TechStack.css";

const techStackData = [
  { src: "/techstacks/icons8-html-480.svg", alt: "HTML" },
  { src: "/techstacks/css.svg.svg", alt: "CSS" },
  { src: "/techstacks/bootstrap.svg.svg", alt: "Bootstrap" },
  { src: "/techstacks/javascript.svg", alt: "JavaScript" },
  { src: "/techstacks/git.svg.svg", alt: "GIT" },
  { src: "/techstacks/github.svg", alt: "GitHub" },
  { src: "/techstacks/python.svg", alt: "Python" },
  { src: "/techstacks/nodejs.svg.svg", alt: "Node.js" },
  { src: "/techstacks/react-js.svg.svg", alt: "React.js" },
  { src: "/techstacks/sql.svg.svg", alt: "SQL" },
  { src: "/techstacks/express-js.svg.svg", alt: "Express.js" },
  { src: "techstacks/vite.svg", alt: "vite" },
];

const TechStack = () => {
  return (
    <div className="techstack-container">
      {techStackData.map((tech, index) => (
        <div className="tech-card" key={index}>
         
          <img src={tech.src} alt={tech.alt} />
        </div>
      ))}
    </div>
  );
};

export default TechStack;
