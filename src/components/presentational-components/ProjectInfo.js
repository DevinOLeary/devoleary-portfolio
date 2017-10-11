import React from 'react';
import Scroll, {Element, Link} from 'react-scroll';

const ProjectInfo = (props) => {
  const content = ''
  if(props.info.id.toString() === props.state){
      return this.content = (
        <div>
          <Link to={props.info.title.rendered} smooth={true}><button onClick={props.closeProject}>close</button></Link>
          <Element name={props.info.id.toString()}><h2>{props.info.title.rendered}</h2></Element>
        </div>
      )
    }
  return (
    <section className="project-pane" id={props.info.id}>
      {content}
    </section>
  );
}

export default ProjectInfo;
