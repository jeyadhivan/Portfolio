import React, { useState, useEffect, useCallback, memo } from "react";

import { LuGithub, LuLinkedin, LuInstagram } from "react-icons/lu";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { Sparkles } from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

const Home = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const WORDS = [
    "Electronics and Communication Engineer",
    "Tech Enthusiast",
    "FullStack Developer",
  ];
  const TYPING_SPEED = 100;
  const ERASING_SPEED = 50;
  const PAUSE_DURATION = 2000;

  useEffect(() => {
    AOS.init({ once: true, offset: 10 });
  }, []);

  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText((prev) => prev + WORDS[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  return (
    <div className="home-container">
      <div className="home-left">
        <div className="status-badge">
          <div className="badge-wrapper">
            <div className="badge-glow"></div>
            <div className="badge-content">
              <span className="badge-text">
                <Sparkles className="icon" />
                Ready to Innovate
              </span>
            </div>
          </div>
        </div>
        <div className="main-title">
          <h1>
            <span className="text-highlight">Frontend</span> <br />
            <span className="text-highlights">Developer</span>
          </h1>
        </div>
        <div className="typing-effect">
          <span>{text}</span>
          <span className="cursor"></span>
        </div>
        <p className="description">
          Creating innovative, functional, and user-friendly websites for
          digital solutions.
        </p>
        <div className="tech-stack">
          {["React", "JavaScript", "Node.js", "CSS", "HTML"].map((tech) => (
            <div key={tech} className="tech-stack-item">
              {tech}
            </div>
          ))}
        </div>
        <div className="cta-buttons">
          <a href="/portfolio" className="cta-button">
            Projects <FaArrowUpRightFromSquare />
          </a>
          <a href="/Contacts" className="cta-button">
            Contact <GoMail />
          </a>
        </div>
        <div className="social-linksss">
          {[
            {
              name: <LuGithub size={25} />,
              url: "https://github.com/jeyadhivan",
            },
            {
              name: <LuLinkedin size={25} />,
              url: "https://www.linkedin.com/in/jeyalakshmigowthaman",
            },
            {
              name: <LuInstagram size={25} />,
              url: "#",
            },
          ].map((social) => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
      <div className="home-right">
        <div className="animated-circle">
          <img
            src="https://img.freepik.com/premium-photo/anime-girl-with-headphones-laptop-generative-ai_1108314-3985.jpg"
            alt="Animated Circle"
            className="circle-image"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
