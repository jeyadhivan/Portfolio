import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
        
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading projects...</div>;
  }

  if (error) {
    return <div>Error loading projects. Please try again later.</div>;
  }

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
              <Link to={`projects/${project.id}`} className="project-details-button">
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
