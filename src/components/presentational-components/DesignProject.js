import React from 'react';
import {TransitionGroup} from 'react-transition-group';

import ProjectContent from './ProjectContent';

const DesignProject = (props) => {
  return(
    <TransitionGroup>
      <ProjectContent className='flex-container center column'>
        <article className="display-box flex-container center column">
        <button onClick={props.closeProject.bind(this)} className="button-action text-inverse button-long"><h4>close</h4></button>
        test 2
        </article>
      </ProjectContent>
    </TransitionGroup>
  );
}

export default DesignProject;
