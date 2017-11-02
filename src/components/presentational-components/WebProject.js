import React from 'react';
import {TransitionGroup} from 'react-transition-group';

import ProjectContent from './ProjectContent';

const WebProject = (props) => {
  return (
    <TransitionGroup>
      <ProjectContent className='flex-container center column'>
        <article className="display-box flex-container center column">
        <button onClick={props.closeProject.bind(this)} className="button-action text-inverse button-long"><h4>close</h4></button>
        test 1
        </article>
      </ProjectContent>
    </TransitionGroup>
  );
}

export default WebProject;
