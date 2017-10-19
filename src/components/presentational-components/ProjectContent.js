import React from 'react';
import {CSSTransition} from 'react-transition-group';


const ProjectContent = ({children,...props}) => {
  return(
    <CSSTransition
    {...props}
    timeout={1500}
    classNames='open'>
      <section className="display-box flex-container center column">
          {children}
      </section>
    </CSSTransition>
  );
}

export default ProjectContent;
