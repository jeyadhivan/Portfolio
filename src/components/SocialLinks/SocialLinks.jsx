import React from "react";
import {
  Linkedin,
  Github,
  Instagram,
  Youtube,
  Mail,
  ExternalLink,
} from "lucide-react";
import "./SocialLinks.css"; 

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/jeyalakshmigowthaman",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true,
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@jeyadhivan_",
    icon: Instagram,
    url: "https://www.instagram.com/",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
  },
  {
    name: "Gmail",
    displayName: "Gmail",
    subText: "@jeyadhivan",
    icon: Mail,
    url: "#",
    color: "#FF0000",
    gradient: "from-[#FF0000] to-[#CC0000]",
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@jeyadhivan",
    icon: Github,
    url: "https://github.com/jeyadhivan",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
  },
];

const SocialLinks = () => {
  const linkedIn = socialLinks.find((link) => link.isPrimary);
  const otherLinks = socialLinks.filter((link) => !link.isPrimary);
  const [instagram, youtube, github] = otherLinks;

  return (
    <div className="social-links-container">
      <h3 className="social-heading">Connect With Me</h3>

      <div className="social-links-list">
        {/* LinkedIn - Primary Row */}
        <a
          href={linkedIn.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          <div className="social-card-content">
            <linkedIn.icon
              className="social-icon"
              style={{ color: linkedIn.color }}
            />
            <div className="text-container">
              <span className="title">{linkedIn.displayName}</span>
              <span className="sub-text">{linkedIn.subText}</span>
            </div>
          </div>
          <ExternalLink className="external-icon" />
        </a>

        {/* Second Row - Instagram & YouTube */}
        <div className="grid-container">
          {[instagram, youtube].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <div className="social-card-content">
                <link.icon
                  className="social-icon"
                  style={{ color: link.color }}
                />
                <div className="text-container">
                  <span className="title">{link.displayName}</span>
                  <span className="sub-text">{link.subText}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Third Row - GitHub */}
        <a
          href={github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          <div className="social-card-content">
            <github.icon
              className="social-icon"
              style={{ color: github.color }}
            />
            <div className="text-container">
              <span className="title">{github.displayName}</span>
              <span className="sub-text">{github.subText}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
