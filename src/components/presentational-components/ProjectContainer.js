import React from 'react';
import {Element} from 'react-scroll';
import {TransitionGroup} from 'react-transition-group';

//components
import ProjectList from './ProjectList'
import DesignSkills from './DesignSkills';
import ProjectContent from './ProjectContent';
import LoadingPane from '../small-components/LoadingPane';


const ProjectContainer = (props) => {
  if(props.loading === true){return <LoadingPane/>}else{

    return(
      <section className="flex-container center column">

        <DesignSkills {...props}/>
        <Element name='projectPane'><div></div></Element>
          <TransitionGroup>
            {props.activeProject.length > 0 &&
            <ProjectContent className='flex-container center column'>
              <article className="display-box flex-container center column">
              <button onClick={props.closeProject} className="button-action text-inverse button-long"><h4>close</h4></button>
              <br/>
              <div className="flex-container center column">
                <h2>{props.openProject.acf.title}</h2>
                <hr className="divider-colored"/>
                {props.openProject.acf.image_one &&
                <img src={props.openProject.acf.image_one.url} alt="img one" className="img-project_preview"/>
                }
                {props.openProject.acf.image_two &&
                <img src={props.openProject.acf.image_two.url} alt="img one" className="img-project_preview"/>
                }
                {props.openProject.acf.image_three &&
                <img src={props.openProject.acf.image_three.url} alt="img one" className="img-project_preview"/>
                }
                {props.openProject.acf.image_four &&
                <img src={props.openProject.acf.image_four.url} alt="img one" className="img-project_preview"/>
                }

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
