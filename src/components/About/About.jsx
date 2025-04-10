import { useEffect, memo, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  Code,
  Award,
  Globe,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { RiCodeLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

const Header = memo(() => (
  <div className="header">
    <div className="header-title">
      <h2>About Me</h2>
    </div>
    <p className="header-subtitle">
      <Sparkles className="icon" />
      Transforming ideas into digital experiences
      <Sparkles className="icon" />
    </p>
  </div>
));

const StatCard = memo(({ icon: Icon, color, value, label, description }) => (
  <div className="stat-card" data-aos={color}>
    <div className="stat-card-content">
      <div className="stat-card-background" />
      <div className="stat-card-header">
        <div className="stat-card-icon">
          <Icon className="icons" />
        </div>
        <span className="stat-card-value">{value}</span>
      </div>
      <div className="stat-card-body">
        <p className="stat-card-label">{label}</p>
        <div className="stat-card-footer">
          <p className="stat-card-description">{description}</p>
          <ArrowUpRight className="arrow-icon" />
        </div>
      </div>
    </div>
  </div>
));

const AboutPage = () => {
  const statsData = useMemo(
    () => [
      {
        icon: Code,
        color: "gradient1",
        value: 15,
        label: "Total Projects",
        description: "Innovative web solutions crafted",
      },
      {
        icon: Award,
        color: "gradient2",
        value: 9,
        label: "Certificates",
        description: "Professional skills validated",
      },
      {
        icon: Globe,
        color: "gradient3",
        value: 1,
        label: "Years of Experience",
        description: "Continuous learning journey",
      },
    ],
    []
  );

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="about-page">
      <Header />

      <div className="content">
        <div className="content-left">
          <h2 className="titles">Hello, I'm </h2>
          <h2>
            <span style={{ color: "#211adf", fontSize: "40px" }}>
              JEYALAKSHMI
            </span>
          </h2>
          <p className="description">
            Full-stack developer specializing in front-end technologies,
            particularly skilled in React.js. Expertise in optimizing web
            applications for performance and responsiveness, with a focus on
            user-centric designs. Proven ability to collaborate effectively in
            team environments, manage time efficiently, and tackle technical
            challenges with a solutions-oriented approach. Proficiency in both
            front-end and back-end technologies to contribute value across
            various stages of development.
          </p>
          <div className="buttons-cv">
            <a
              href="/Resume-Jeya.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="CV cv-background">
                <FileText size={20} /> Download Resume
              </button>
            </a>

            <Link to="/portfolio">
              <button type="button" className="CV CVP">
                <RiCodeLine size={20} /> View Projects
              </button>
            </Link>
          </div>
        </div>
        <div className="content-right">
          <img
            src="https://img.freepik.com/premium-photo/anime-girl-with-headphones-laptop-generative-ai_1108314-3985.jpg"
            alt="Animated Circle"
            className="circle-image"
          />
        </div>
      </div>

      <div className="stat-cards">
        {statsData.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
