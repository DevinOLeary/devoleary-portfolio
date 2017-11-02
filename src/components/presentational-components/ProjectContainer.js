import React from 'react';
import {Element} from 'react-scroll';


//components
import ProjectList from './ProjectList'
import DesignSkills from './DesignSkills';
import LoadingPane from '../small-components/LoadingPane';
import DesignProject from './DesignProject';
import WebProject from './WebProject';
import AnimationProject from './AnimationProject';


const ProjectContainer = (props) => {

  let contentWindow = ''
    if(props.activeProject.length > 0){
    let projectContent= '';
    if(props.openProject.acf.category === "Design"){
      projectContent = <DesignProject info={props.openProject} closeProject={props.closeProject}/>
    } else if(props.openProject.acf.category === "Development"){
      projectContent = <WebProject info={props.openProject} closeProject={props.closeProject}/>
    } else if(props.opProject.acf.category === "Animation"){
      projectContent = <AnimationProject info={props.openProject} closeProject={props.closeProject}/>
    } else{
      projectContent = null;
    }
    contentWindow = projectContent
  }

  if(props.loading === true){return <LoadingPane/>}else{
    return(
      <section className="flex-container center column">

        <DesignSkills {...props}/>
        <Element name='projectPane'><div></div></Element>

          {contentWindow}

        <ProjectList {...props} isOpen={props.isOpen} updateCategoryList={props.updateCategoryList}/>
      </section>
    )
  }
}

export default ProjectContainer;
