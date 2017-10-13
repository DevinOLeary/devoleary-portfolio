import React from 'react';
import {CSSTransition} from 'react-transition-group';


const ProjectInfo = ({children, ...props}) => {
  return (
    <CSSTransition
    {...props}
    timeout={1000}
    classNames='fade'>
      {children}
    </CSSTransition>
  );
}

export default ProjectInfo;
