import React from 'react';
import {Element} from 'react-scroll';
import {TransitionGroup} from 'react-transition-group';

//components
import ProjectList from './ProjectList'
import Content from './SliderContent';
import ProjectContent from './ProjectContent';
import LoadingPane from '../small-components/LoadingPane';

const ProjectContainer = (props) => {
  if(props.loading === true){return <LoadingPane/>}else{
    return(
      <section className="flex-container center column">
        <span className='triangle'></span>
        <Content {...props}/>
        <Element name='projectPane'><div></div></Element>
          <TransitionGroup>
            {props.activeProject.length > 0 &&
            <ProjectContent className='flex-container center column'>
              <article className="display-box flex-container center column">
              <button onClick={props.closeProject}>close</button>
              <h2 className='text-center text-inverse'>{props.openInfo.title}</h2>
              <br/>
              <div className="flex-container center column">
                <h2>{props.openInfo.title}</h2>
                <hr className="divider-colored"/>
                <img src={props.openInfo.image_one.url} alt={props.openInfo.title} className="img-project_preview"/>
                <p className="content-body_read">{props.openInfo.description}</p>
              </div>
              </article>
            </ProjectContent>
            }
          </TransitionGroup>
        <ProjectList {...props} isOpen={props.isOpen} updateCategoryList={props.updateCategoryList}/>
      </section>
    )
  }
}

export default ProjectContainer;
