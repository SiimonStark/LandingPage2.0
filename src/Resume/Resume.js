import React from 'react';

const Resume = ({togglePopup}) => {
  return (
    <div
      className="overlay x-overlay"
      onClick={e => togglePopup(e, false, "Resume")}
    >
      <section className="Resume">
        <header className="retro-header">
          <img
            className="retro-logo"
            src={require("../resource/sunset.png")}
            alt="Justin's Sunset Logo"
          />
          <p>Justin's Resume.exe</p>
          <button
            className="retro-button close x-overlay"
            onClick={e => togglePopup(e, false, "Resume")}
          >
            _
          </button>
        </header>
        <article className="resume light-resume">
          <a
            href={require("../resource/Light Resume copy.pdf")}
            target="blank"
            rel="noopener norefferrer"
          >
            <img
              src={require("../resource/mini_resume.png")}
              alt="Light Resume thumbnail"
            />
          </a>
          <div className="links">
            <a
              className="retro-button"
              href={require("../resource/Light Resume copy.pdf")}
              target="blank"
              rel="noopener norefferrer"
            >
              View
            </a>
            <a
              className="retro-button"
              href={require("../resource/Light Resume copy.pdf")}
              download
            >
              Download
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Resume;