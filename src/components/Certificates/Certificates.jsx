import React, { useState } from "react";
import "./Certificates.css";

const Certificates = () => {
  const certificates = [
    { title: "Full Stack Development Specialization (MERN) - NxtWave", file: "OEIDTCWFZW_page-0001.jpg" },
    { title: "JavaScript Essentials - NxtWave", file: "WNJHNRBCXB_page-0001.jpg" },
    { title: "Building Front-End Apps with React - NxtWave", file: "IUSEUGSARI_page-0001.jpg" },
    { title: "Developing Back-End Apps with Node.js and Express - NxtWave", file: "YLKWBHEIIG_page-0001.jpg" },
    { title: "Developer Foundation: Command Line and Git - NxtWave", file: "ECQFDSWYOH_page-0001.jpg" },
    { title: "Programming Foundation with PYTHON - NxtWave", file: "PECUWKBEZB_page-0001.jpg" },
    { title: "SQL for Data Analysis - NxtWave", file: "PJFYROSHJW_page-0001.jpg" },
    { title: "Responsive Web Design with Flexbox - NxtWave", file: "VITTUUIODG_page-0001.jpg" },
    { title: "Static Website Development with HTML, CSS & Bootstrap - NxtWave", file: "BOZAPRAUQW_page-0001.jpg" },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 4);

  return (
    <section className="certificates">
      
      <div className="certificates-grid">
        {visibleCertificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <h3>{cert.title}</h3>
            <img
              src={`/certificates/${cert.file}`}
              className="certificate-frame"
              title={cert.title}
            ></img>
            <a
              href={`/certificates/${cert.file}`}
              download
              className="download-link"
            >
              Download
            </a>
          </div>
        ))}
      </div>
      <div className="show-more-container">
        <button onClick={() => setShowAll(!showAll)} className="show-more-button">
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Certificates;
