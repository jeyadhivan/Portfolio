import React, { useEffect, memo, useMemo } from "react";
import {
  FileText,
  Code,
  Award,
  Globe,
  ArrowUpRight,
  Sparkles,
  UserCheck,
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

const ProfileImage = memo(() => (
  <div className="profile-image-wrapper">
    <div className="home-right">
      <div className="animated-circle"></div>
    </div>
  </div>
));

const StatCard = memo(
  ({ icon: Icon, color, value, label, description, animation }) => (
    <div className="stat-card">
      <div className="stat-card-content">
        <div className="stat-card-background" />
        <div className="stat-card-header">
          <div className="stat-card-icon">
            <Icon className="icon" />
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
  )
);

const AboutPage = () => {
  const { totalProjects, totalCertificates, YearExperience } = useMemo(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    const storedCertificates = JSON.parse(
      localStorage.getItem("certificates") || "[]"
    );

    const startDate = new Date("2021-11-06");
    const today = new Date();
    const experience =
      today.getFullYear() -
      startDate.getFullYear() -
      (today <
      new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate())
        ? 1
        : 0);

    return {
      totalProjects: storedProjects.length,
      totalCertificates: storedCertificates.length,
      YearExperience: experience,
    };
  }, []);

  const statsData = useMemo(
    () => [
      {
        icon: Code,
        color: "gradient1",
        value: totalProjects,
        label: "Total Projects",
        description: "Innovative web solutions crafted",
      },
      {
        icon: Award,
        color: "gradient2",
        value: totalCertificates,
        label: "Certificates",
        description: "Professional skills validated",
      },
      {
        icon: Globe,
        color: "gradient3",
        value: YearExperience,
        label: "Years of Experience",
        description: "Continuous learning journey",
      },
    ],
    [totalProjects, totalCertificates, YearExperience]
  );

  return (
    <div className="about-page">
      <Header />

      <div className="content">
        <div className="content-left">
          <h2 className="title">Hello, I'm </h2>
          <h2>
            <span style={{ color: "#8BE866", fontSize: "40px" }}>
              JEYALAKSHMI
            </span>
          </h2>
          <p className="description">
            Full-stack developer specializing in front-end technologies,
            particularly skilled in React.js.Expertise in optimizing web
            applications for performance and responsiveness, with a focus on
            user-centric designs. Proven ability to collaborate effectively in
            team environments, manage time efficiently, and tackle technical
            challenges with a solutions-oriented approach. Proficiency in both
            front-end and back-end technologies to contribute value across
            various stages of development.
          </p>
          <div className="buttons-cv">
            <button type="button" className="CV">
              <FileText size={40} /> Download CV
            </button>
            <button type="button" className="CV CVP">
              {" "}
              <RiCodeLine size={40} /> View Projects
            </button>
          </div>
          <div className="stat-cards">
            {statsData.map((stat, idx) => (
              <StatCard key={idx} {...stat} />
            ))}
          </div>
        </div>
        <ProfileImage />
      </div>
    </div>
  );
};

export default AboutPage;
