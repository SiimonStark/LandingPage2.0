import React from 'react';

const Resume = ({togglePopup}) => {
  return (
    <div className="overlay x-overlay" onClick={(e) => togglePopup(e, false, "Resume")}>
      <section className="Resume">
        <button className="close x-overlay" onClick={(e) => togglePopup(e, false, "Resume")}>
          Close
        </button>
        <article className="resume light-resume">
          <div className="links">
            <a href={require("../resource/Light Resume copy.pdf")} target="blank" rel="noopener norefferrer">
              View
            </a>
            <a href={require("../resource/Light Resume copy.pdf")} download>
              Download
            </a>
          </div>
          <img src={require("../resource/mini_resume.png")} alt="Light Resume thumbnail" />
        </article>
        
      </section>
    </div>
  );
}

export default Resume;

// <article className="resume dark-resume">
//           image will go here w/ download options
//         </article>