import React from 'react';
import {Link} from 'react-scroll';

//components
import Content from './SliderContent';

const ProjectInfo = (props) => {
  const info = props.info.acf;

console.log(info);
  if(props.info.id.toString() === props.state){
    return (
      <section className="project-pane" id={props.info.id}>
        <Link to={props.info.title.rendered} smooth={true}>
          <button onClick={props.closeProject}>close</button>
        </Link>
        <h2 className='text-center text-inverse'>{props.info.title.rendered}</h2>
        <br/>
        <div className="flex-container center">
          <Content info={info}/>
        </div>
      </section>
    );
  } else {return null}
}

export default ProjectInfo;
