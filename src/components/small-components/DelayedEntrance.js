import React from 'react';
import {CSSTransition} from 'react-transition-group';


const ContentFadeIn = ({children, ...props}) => {
  return (
    <CSSTransition
    {...props}
    onEnter
    timeout={1500}
    classNames='fade'>
      {children}
    </CSSTransition>
  );
}

export default ContentFadeIn;
