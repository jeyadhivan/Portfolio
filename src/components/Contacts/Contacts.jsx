import React, { useState, useEffect } from "react";
import "./Contacts.css";
import SocialLinks from "../SocialLinks/SocialLinks";
import { db } from "../../../firebase";
import { ref, push, onValue } from "firebase/database";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacts = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const commentsRef = ref(db, "comments");
    onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const commentsArray = Object.entries(data).map(([id, value]) => ({
          id,
          ...value,
        }));
        const sortedComments = commentsArray.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        setComments(sortedComments);
      } else {
        setComments([]);
      }
    });
  }, []);

  const handlePostComment = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newComment = {
      name: name.trim(),
      text: comment.trim(),
      timestamp: new Date().toISOString(),
    };

    const commentsRef = ref(db, "comments");
    push(commentsRef, newComment);
    setName("");
    setComment("");
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      setStatus("Please fill in all fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactEmail)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    const contactData = {
      name: contactName.trim(),
      email: contactEmail.trim(),
      message: contactMessage.trim(),
      timestamp: new Date().toISOString(),
    };

    setLoading(true);
    setStatus("");

    try {
      const contactRef = ref(db, "messages");
      await push(contactRef, contactData);

      await emailjs.send(
        "service_tzywk7l",
        "template_jqhkq3p",
        {
          from_name: contactName,
          from_email: contactEmail,
          message: contactMessage,
        },
        "oeBGnfDvptStLiEdI"
      );

      toast.success("Message sent successfully!");

      setContactName("");
      setContactEmail("");
      setContactMessage("");
    } catch (error) {
      toast.error("Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (status) {
      const timeout = setTimeout(() => setStatus(""), 3000);
      return () => clearTimeout(timeout);
    }
  }, [status]);

  const getTimeAgo = (timeString) => {
    const now = new Date();
    const past = new Date(timeString);
    let diff = Math.floor((now - past) / 1000);

    if (diff < 0) diff = 0;

    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hrs ago`;
    return `${Math.floor(diff / 86400)} days ago`;
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        {/* Left Section */}
        <div className="left-section">
          <h1 className="contact-title">Let's Get in Touch!</h1>
          <p className="contact-description">
            I'm excited to connect with you! Feel free to reach out for job
            opportunities, collaboration, or just a friendly chat.
          </p>
          <SocialLinks />
        </div>

        {/* Right Section */}
        <div className="right-section">
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Type your message here..."
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
            />
          </form>

          {/* Comment Section */}
          <div className="comments-section">
            <h2 className="comment-heading">Comments ({comments.length})</h2>
            <form onSubmit={handlePostComment} className="comment-form">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <textarea
                placeholder="Write a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
              <button type="submit">Post</button>
            </form>

            <ul className="comment-list">
              {comments.map((c) => (
                <li key={c.id} className="comment">
                  <div className="avatar">{c.name.charAt(0).toUpperCase()}</div>
                  <div className="comment-content">
                    <div className="comment-header">
                      <strong>{c.name}</strong>
                      <span className="time">{getTimeAgo(c.timestamp)}</span>
                    </div>
                    <p className="comment-text">{c.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
