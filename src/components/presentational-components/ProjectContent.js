import React from 'react';


const ProjectContent = (props) => {
  const info = props.info;
  return(
    <article>
      <h2>{info.title}</h2>
      <hr className="divider-colored"/>
      <img src={info.image_one} alt={info.title}/>
    </article>
  );
}

export default ProjectContent;
