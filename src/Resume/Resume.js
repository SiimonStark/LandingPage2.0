import React from 'react';

const Resume = ({togglePopup}) => {
  return (
    <div className="overlay">
      <section className="Resume">
        <button 
          name="Resume" 
          onClick={(e) => togglePopup(e)} >
          Close
        </button>
        <article className="resume light-resume">
          image will go here
          w/ download options
        </article>
        <article className="resume dark-resume">
          image will go here
          w/ download options
        </article>
      </section>
    </div>
  )
}

export default Resume;