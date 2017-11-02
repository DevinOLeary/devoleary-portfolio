import React from 'react';

import ProjectContent from './ProjectContent';

const AnimationProject = (props) => {
  return (
    <ProjectContent className='flex-container center column'>
      <article className="display-box flex-container center column">
      <button onClick={props.closeProject.bind(this)} className="button-action text-inverse button-long"><h4>close</h4></button>
    test 3
      </article>
    </ProjectContent>
  );
}

export default AnimationProject;
