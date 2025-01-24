const Projects = () => (
  <section className="projects">
    <h2>Projects</h2>
    <div className="project-grid">
      <div className="category">
        <h3>Static Websites</h3>
      </div>
      <div className="category">
        <h3>Responsive Websites</h3>
      </div>
      <div className="category">
        <h3>React.js Projects</h3>
        <ul>
          <li>Netflix Clone: Built with React.js and TMDB API</li>
          <li>E-commerce Platform: JWT authentication and REST APIs</li>
        </ul>
      </div>
      <div className="category">
        <h3>Node.js Projects</h3>
      </div>
      <div className="category">
        <h3>SQL Projects</h3>
      </div>
    </div>
  </section>
);
export default Projects;
