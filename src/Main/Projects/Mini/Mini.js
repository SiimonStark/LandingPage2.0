import React from 'react';

const Mini = ({index, project, displayProject}) => {
  return (
    <article
      className="thumbnail"
      key={index}
      onClick={() => displayProject(project)}
    >
      <h5 className="tip">{project.name}</h5>
      <img 
        src={project.screenshots[0]} 
        alt={`Screenshot of ${project.name}`} />
    </article>
  );
}

export default Mini;