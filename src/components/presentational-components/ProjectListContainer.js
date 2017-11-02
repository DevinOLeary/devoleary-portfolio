import React from 'react';
import {Element} from 'react-scroll';
import {TransitionGroup} from 'react-transition-group';


//components
import ProjectList from './ProjectList'
import DesignSkills from './DesignSkills';
import LoadingPane from '../small-components/LoadingPane';
import DesignProject from './DesignProject';
import WebProject from './WebProject';
import AnimationProject from './AnimationProject';
import SingleProjectContent from './SingleProjectContent';


const ProjectListContainer = (props) => {
//conditionally check the active project status and set contentWindow = to the active object
  let contentWindow = ''
    if(props.activeProject.length > 0){
    let projectContent= '';
    if(props.openProject.acf.category === "Design"){
      projectContent = <SingleProjectContent closeProject={props.closeProject}><DesignProject info={props.openProject}/></SingleProjectContent>
    } else if(props.openProject.acf.category === "Development"){
      projectContent = <SingleProjectContent closeProject={props.closeProject}><WebProject info={props.openProject}/></SingleProjectContent>
    } else if(props.opProject.acf.category === "Animation"){
      projectContent = <SingleProjectContent closeProject={props.closeProject}><AnimationProject info={props.openProject}/></SingleProjectContent>
    } else{
      projectContent = '';
    }
    contentWindow = projectContent
  }

  if(props.loading === true){return <LoadingPane/>}else{
    return(
      <section className="flex-container center column">

        <DesignSkills {...props}/>
        <Element name='projectPane'><div></div></Element>
        <TransitionGroup>
          {contentWindow === '' ? <div/> : contentWindow}
        </TransitionGroup>
        <ProjectList {...props} isOpen={props.isOpen} updateCategoryList={props.updateCategoryList}/>
      </section>
    )
  }
}

export default ProjectListContainer;
