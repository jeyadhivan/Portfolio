import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaRocket,
  FaCogs,
  FaTools,
  FaArrowLeft,
} from "react-icons/fa";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
} from "react-icons/si";
import "./ProjectDetails.css";

const techIcons = {
  React: <SiReact />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  JavaScript: <SiJavascript />,
  Python: <SiPython />,
};

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/projects.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedProject = data.find((proj) => proj.id === id);
        setProject(selectedProject);
      })
      .catch((error) => console.error("Error fetching project:", error));
  }, [id]);

  if (!project) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="project-details-container">
      <div className="bg-bubbles">
        <div className="bubble bubble1" />
        <div className="bubble bubble2" />
        <div className="bubble bubble3" />
      </div>
      <div className="grid-bg"></div>

      <div className="container">
        <div className="head-container">
          <h1 className="project-title">{project.title}</h1>
          <p className="project-para">{project.description}</p>
          {project.credentials && (
            <div className="project-credentials">
              <h4>Demo Login Credentials:</h4>
              <p>
                <strong>Email:</strong> {project.credentials.username}
              </p>
              <p>
                <strong>Password:</strong> {project.credentials.password}
              </p>
              <p className="credentials-note">
                <em>
                  Note: This project is for educational/demo purposes only.
                </em>
              </p>
            </div>
          )}
        </div>
        <div className="project-image-container">
          <img src={project.img} alt={project.title} />
        </div>
      </div>

      <div className="features-count-container">
        <section className="count-container">
          <div className="count-content">
            <p>{project.techCount}</p>
            <p>Technologies Used</p>
          </div>
          <div className="count-content">
            <p>{project.featuresCount}</p>
            <p>Features</p>
          </div>
        </section>

        <section className="features-section">
          <section className="objective-section">
            <h2 className="section-title">
              <FaRocket className="icon" />
              <p className="section-title">Objective</p>
            </h2>
            <p className="section-content">{project.objective}</p>
          </section>
          <h2 className="section-title">
            <FaCogs className="icon" /> Features
          </h2>
          <ul className="features-list">
            {project.features.map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="check-icon">✓</span>
                <p>{feature}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="project-links">
        <a
          href={project.githubUrl}
          className="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" /> GitHub
        </a>
        <a
          href={project.link}
          className="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaExternalLinkAlt className="icon" /> Live Demo
        </a>
      </div>

      <section className="tech-stack-section">
        <h2 className="section-title">
          <FaTools className="icon" /> Tech Stack
        </h2>
        <div className="tech-stack-container">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-badge">
              {techIcons[tech] || "⚙️"} {tech}
            </span>
          ))}
        </div>
      </section>

      <button className="back-button" onClick={() => navigate("/portfolio")}>
        <FaArrowLeft className="icon" /> Back to Projects
      </button>
    </div>
  );
};

export default ProjectDetails;
