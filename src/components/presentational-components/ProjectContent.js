import React from 'react';


const ProjectContent = (props) => {
  const info = props.info;
  return(
    <article>
      <h2>{info.title}</h2>
      <hr className="divider-colored"/>
      <img src={info.image_one.url} alt={info.title} className="img-project_preview"/>
    </article>
  );
}

export default ProjectContent;
