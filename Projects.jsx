import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    title: "Simple ToDo App",
    description:
      "A task management app that allows users to add, edit, and delete tasks.",
    techStack: "JavaScript, HTML, CSS",
    link: "#",
    img: "https://i.imghippo.com/files/zZDh4902aA.png",
  },
  {
    title: "NxtTrendz E-commerce App",
    description:
      "An e-commerce platform with user authentication, cart functionality, and product browsing.",
    techStack: "React.js, Context, JS-Cookie, CSS, Authentication",
    link: "https://jeyanxttrendz.ccbp.tech/login",
    img: "https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-sm-outputs.png",
  },
  {
    title: "Movie Database App",
    description:
      "A movie discovery app featuring pagination for browsing popular, top-rated, and upcoming movies.",
    techStack: "React.js, API Integration, CSS",
    link: "#",
    img: "https://i.imghippo.com/files/xcv3567At.png",
  },
  {
    title: "Jobby App",
    description:
      "A job search platform that allows users to filter and apply for jobs based on various criteria.",
    techStack: "React.js, API Integration, CSS",
    link: "#",
    img: "https://assets.ccbp.in/frontend/content/react-js/jobby-app-jobs-sm-outputs.png",
  },
  {
    title: "Library Management System",
    description:
      "A system to manage book inventory, user borrowing, and returns.",
    techStack: "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
    link: "#",
    img: "https://i.imghippo.com/files/YlY8609DAc.jpeg",
  },
  {
    title: "Speed Typing Test",
    description:
      "A web app that measures typing speed and accuracy in real-time.",
    techStack: "JavaScript, HTML, CSS",
    link: "#",
    img:"https://i.imghippo.com/files/kdu6831fE.png",
  },
  {
    title: "Rock Paper Scissors Game",
    description:
      "A command-line Python game that lets users play Rock Paper Scissors against the computer.",
    techStack: "React, CSS",
    link: "https://jeyalakshmi.ccbp.tech/",
    img: "https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-output.gif",
  },
  {
    title: "Nxt Watch",
    description:
      "A smart video app showcasing trending content for endless entertainment and creativity. Save your favorite videos and switch seamlessly between light and dark themes to match your mood!",
    techStack: "React, styled-components, context",
    link: "https://jeyaNxtWatch.ccbp.tech",
    img: "https://i.ytimg.com/vi/wEFvcFp1Zfc/maxresdefault.jpg",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="project-card-overlay"></div>
          <div className="project-card-content">
            <div className="project-card-image-wrapper">
              <img
                src={project.img}
                alt={project.title}
                className="project-card-image"
              />
            </div>
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-card-description">{project.description}</p>
            <div className="project-card-buttons">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-live-demo"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="icon" />
                </a>
              ) : (
                <span className="project-demo-unavailable">
                  Demo Not Available
                </span>
              )}
              <Link to={`/project/${index}`} className="project-details-button">
                <span>Details</span>
                <ArrowRight className="icon" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
