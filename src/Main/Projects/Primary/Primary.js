import React from 'react';

const Primary = ({project, screenshotIndex, changeScreenshot}) => {
  const {name, description, screenshots, github, liveSite, tools} = project;
  return (
   <section className="Primary">
     <h3 className="title">{name}</h3>
     <section className="image">
       {screenshotIndex > 0 && (
         <button onClick={() => changeScreenshot(screenshotIndex, 0)}>
           Prev
         </button>
       )}

       <img src={screenshots[screenshotIndex]} alt={`${name} screenshot`} />

       {screenshotIndex < screenshots.length - 1 && (
         <button onClick={() => changeScreenshot(screenshotIndex, 1)}>
           Next
         </button>
       )}
     </section>
     <section className="descript">
       <div>
         {liveSite && (
           <a href={liveSite} target="blank">
             Live Site
           </a>
         )}
         <a href={github} target="blank">
           Github
         </a>
       </div>
       {description}
     </section>
   </section>
 );
}

export default Primary;