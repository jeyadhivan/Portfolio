import React from "react";
import "./Contacts.css";
import { Github, Mail, Linkedin } from "lucide-react";

const Contacts = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        {/* Left Section */}
        <div>
          <h1 className="contact-title">Let's Get in Touch!</h1>
          <p className="contact-description">
            I'm excited to connect with you! Feel free to reach out for job
            opportunities, collaboration, or just a friendly chat.
          </p>

          <div className="contact-socials">
            <p>Or connect with me:</p>
            <div className="social-links">
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github />
              </a>
              <a
                href="mailto:your-email@example.com"
                aria-label="Send an Email"
              >
                <Mail />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
