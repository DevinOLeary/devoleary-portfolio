import React from 'react';

const ProjectInfo = (props) => {
  const content = ''
  if(props.info.id.toString() === props.state){
      return this.content = <p>{props.info.title.rendered}</p>
    }
  return (
    <section className="project-pane" id={props.info.id}>
      {content}
    </section>
  );
}

export default ProjectInfo;
