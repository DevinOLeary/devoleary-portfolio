import React from 'react';
import ProjectInfo from './ProjectInfo';



const ProjectList = (props) => {
  if(props.projectInfo.length === 0){return null}
  const itemList = props.projectInfo.map(dev => {
    const title = dev.title.rendered;
    if(dev.acf.category === props.category){
      return (
        <li key={dev.id}>
          <div className="project_item-container">
            <img className="img-project_preview" src={dev._embedded['wp:featuredmedia']["0"].source_url}
            alt={dev.slug}/>
            <article className="project_text-container text-inverse">
              <h2>{title}</h2>
              <h5>{dev.acf.description}</h5>
              <button onClick={props.isOpen.bind(this, dev.id)}>open</button>
            </article>
          </div>
          <ProjectInfo info={dev} state={props.activeProject}/>
        </li>
      )
    } else{ return ''}
  })
  return (

    <div>
      <section className="">
        <h1 className="text-center">{props.category}</h1>
        <ul>
          {itemList}
        </ul>
      </section>
    </div>
  );
}

export default ProjectList;
