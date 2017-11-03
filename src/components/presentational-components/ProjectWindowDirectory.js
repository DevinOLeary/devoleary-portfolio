import React from 'react';
import {TransitionGroup} from 'react-transition-group';

import DesignProject from './DesignProject';
import WebProject from './WebProject';
import AnimationProject from './AnimationProject';
import SingleProjectContent from './SingleProjectContent';
import animations from '../small-components/animations';


class ProjectWindowDirectory extends React.Component {

  render(props){
    let contentWindow = ''
      if(this.props.activeProject.length > 0){
      let projectContent= '';
      if(this.props.openProject.acf.category === "Design"){
        projectContent = <DesignProject info={this.props.openProject}/>
      } else if(this.props.openProject.acf.category === "Development"){
        projectContent = <WebProject info={this.props.openProject}/>
      } else if(this.props.opProject.acf.category === "Animation"){
        projectContent = <AnimationProject info={this.props.openProject}/>
      } else{
        projectContent = '';
      }
      contentWindow = projectContent
    }
    return (
      <TransitionGroup>
      {contentWindow !== '' &&
      <SingleProjectContent>
        <button onClick={this.props.closeProject.bind(this)} className="button-action text-inverse button-long"><h4>close</h4></button>
        {contentWindow}
      </SingleProjectContent>
        }
    </TransitionGroup>
    );
  }
}

export default ProjectWindowDirectory;
