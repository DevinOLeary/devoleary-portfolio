import React from 'react';

import ProjectSlider from './ProjectSlider';


const DesignProject = (props) => {
  let acf = props.info.acf;
  return(
    <div className="full-width">
      <h2 className="text-center">{acf.title}</h2>
      <section className="flex-container row center">
        <aside className="project_preview-description">
          <p>{acf.description}</p>
        </aside>
        <aside className="project_preview-slider flex-container center">
          <ProjectSlider>
            <div><img src={acf.image_one.url} className="img-project_preview" alt={acf.title}/></div>

            <div><img src={acf.image_one.url} className="img-project_preview" alt={acf.title}/></div>

            <div><img src={acf.image_one.url} className="img-project_preview" alt={acf.title}/></div>

            <div><img src={acf.image_one.url} className="img-project_preview" alt={acf.title}/></div>
          
          </ProjectSlider>

        </aside>
      </section>
    </div>
  );
}

export default DesignProject;
