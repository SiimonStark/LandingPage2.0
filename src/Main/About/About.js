import React from 'react';
import { urlIcons } from '../Projects/data/projectList';

const About = () => {
  const renderToolIcons = () => {
    return urlIcons.map(icon => {
      return <div className="tool" key={icon.name}>
        <img src={icon.url} alt={icon.name + ' icon'} />
        <h6 className="tip">{icon.name}</h6>
      </div>
    })
  }

  return (
    <section id='About' className="About" >
      <div>
        <h2>Passion:</h2>
        <p>
          We do our best work when we can allow ourselves to imagine future possibilites.<br />
          The future can be filled with beautiful experiences. But building out and developing user facing technology takes intricacy and forethought. It's also important to make the experience fun and easy on the eyes. And I believe that is where my skills can really shine.<br />
          Let's work together to deliver a digital product that we can be proud of!
        </p>
      </div>
      <div className='experience'>
        <h2>Experience:</h2>
        <ul>
          <li>
            <p className='header'>Trilogy - (3 years)</p>
            {/* <p className='description'><span>Description:</span> lorem ipsum</p> */}
          </li>
          <li>
            <p className='header'>Freelance - (1 year)</p>
            {/* <p className='description'><span>Description:</span> lorem ipsum</p> */}
          </li>
          <li>
            <p className='header'>MurmurTechnologies - (1 year)</p>
            {/* <p className='description'><span>Description:</span> lorem ipsum</p> */}
          </li>
          <li>
            <p className='header'>CreatorSphere - (1 year)</p>
            {/* <p className='description'><span>Description:</span> lorem ipsum</p> */}
          </li>
          <li>
            <p className='header'>eTranservices - (2 year)</p>
            {/* <p className='description'><span>Description:</span> lorem ipsum</p> */}
          </li>
          <li>
            <p className='header'>Turing - (1 year)</p>
            {/* <p className='description'><span>Description:</span> lorem ipsum</p> */}
          </li>
        </ul>
      </div>
      <div>
        <h2>Skills:</h2>
        <div className='tool_icons'>
          {renderToolIcons()}
        </div>
      </div>
      <hr />
    </section>
  )
}

export default About;