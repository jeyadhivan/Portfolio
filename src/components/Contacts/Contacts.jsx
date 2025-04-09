import React, { useState,  useEffect } from "react";
import "./Contacts.css";
import SocialLinks from "../SocialLinks/SocialLinks";

const LOCAL_STORAGE_KEY = "commentsData"; 

const Contacts = () => {
  const [comments, setComments] = useState(() => {
    // Load from localStorage on initial render
    const savedComments = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedComments ? JSON.parse(savedComments) : [];
  });
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    // Save comments to localStorage whenever they change
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(comments));
  }, [comments]);

  const handlePostComment = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newComment = {
      id: Date.now(),
      name: name.trim(),
      text: comment.trim(),
      timestamp: new Date().toISOString(),
    };

    setComments([newComment, ...comments]); // Add new comment
    setName("");
    setComment("");
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  const getTimeAgo = (timeString) => {
    const now = new Date();
    const past = new Date(timeString);
    const diff = Math.floor((now - past) / 1000);

    if (diff < 60) return `${diff} sec ago`;
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
          <form className="contact-form" onSubmit={onSubmitForm}>
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
              />
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
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
