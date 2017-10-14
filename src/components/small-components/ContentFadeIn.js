import React from 'react';
import {CSSTransition} from 'react-transition-group';


const ContentFadeIn = ({children, ...props}) => {
  return (
    <CSSTransition
    {...props}
    timeout={1000}
    classNames={props.styleProp}>
      {children}
    </CSSTransition>
  );
}

export default ContentFadeIn;
