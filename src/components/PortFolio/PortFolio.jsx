import NavBar from "../Navbar/Navbar";
import { PiCodeSimpleBold } from "react-icons/pi";
import { GrCertificate } from "react-icons/gr";
import { FaBoxesStacked } from "react-icons/fa6";
import "./PortFolio.css";

function PortFolio() {
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
          <div>
            <PiCodeSimpleBold size={20} />
            Projects
          </div>
          <div>
            <GrCertificate size={20} />
            Certificates
          </div>
          <div>
            <FaBoxesStacked size={20} />
            Tech Stack
          </div>
        </div>
        <div id="gasses">
          <div className="gas he">
            <span className="number">1</span>
            <h2 className="name">Static Website</h2>
            <p className="name">Projects</p>
          </div>
          <div className="gas ne">
            <span className="number">2</span>
            <h2 className="name">Dynamic website</h2>
            <p className="name">Projects</p>
          </div>
          <div className="gas ar">
            <span className="number">3</span>
            <h2 className="name">Node js</h2>
            <p className="name">Projects</p>
          </div>
          <div className="gas kr">
            <span className="number">4</span>
            <h2 className="name">Bootstrap</h2>
            <p className="name">Projects</p>
          </div>
          <div className="gas xe">
            <span className="number">5</span>
            <h2 className="name">ReactJS</h2>
            <p className="name">Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PortFolio;
