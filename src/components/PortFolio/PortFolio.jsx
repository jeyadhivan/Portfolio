import { useState } from "react";
import NavBar from "../Navbar/Navbar";
import { PiCodeSimpleBold } from "react-icons/pi";
import { GrCertificate } from "react-icons/gr";
import { FaBoxesStacked } from "react-icons/fa6";
import "./PortFolio.css";
import Certificates from "../Certificates/Certificates";
import TechStack from "../Techstack/TechStack";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";

function PortFolio() {
  // Default active section is "projects"
  const [activeSection, setActiveSection] = useState("projects");

  return (
    <div>
      <NavBar />
      <div className="home">
        <div className="heading">
          <h1>Portfolio Showcase</h1>

          <p>
            Explore my journey through projects, certifications, and technical
            expertise. Each section represents a milestone in my continuous
            learning path.
          </p>
        </div>
        <div className="link-bar">
          <div
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => setActiveSection("projects")}
          >
            <PiCodeSimpleBold size={20} />
            Projects
          </div>
          <div
            onClick={() => setActiveSection("certificates")}
            className={activeSection === "certificates" ? "active" : ""}
          >
            <GrCertificate size={20} />
            Certificates
          </div>
          <div
            onClick={() => setActiveSection("techstack")}
            className={activeSection === "techstack" ? "active" : ""}
          >
            <FaBoxesStacked size={20} />
            Tech Stack
          </div>
        </div>

        {/* Render the selected section */}
        <div className="portfolio-content">
          {activeSection === "projects" && <Projects />}
          {activeSection === "certificates" && <Certificates />}
          {activeSection === "techstack" && <TechStack />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PortFolio;
