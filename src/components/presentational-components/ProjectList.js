import React from 'react';
import ProjectInfo from './ProjectInfo';
import Scroll, {Link, Element} from 'react-scroll';


const ProjectList = (props) => {
  if(props.projectInfo.length === 0){return null}
  const itemList = props.projectInfo.map(dev => {
    const title = dev.title.rendered;
    if(dev.acf.category === props.category){
      return (
        <li key={dev.id}>
          <div className="project_item-container">
            <Element name={dev.title.rendered} ><img className="img-project_preview" src={dev._embedded['wp:featuredmedia']["0"].source_url}
            alt={dev.slug}/></Element>
            <article className="project_text-container text-inverse">
              <h2>{title}</h2>
              <h5>{dev.acf.description}</h5>
              <Link to={dev.id.toString()} smooth={true}><button onClick={props.isOpen.bind(this, dev.id)}>open</button></Link>
            </article>
          </div>
          <ProjectInfo info={dev} state={props.activeProject} closeProject={props.closeProject}/>
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
