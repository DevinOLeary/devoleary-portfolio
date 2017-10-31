import React from 'react';
import {CSSTransition} from 'react-transition-group';

const TimelineContent = ({...props}) => {

  return(
    <CSSTransition
    {...props}
    classNames="fade"
    timeout={500}>
      <article className="content-body_read">
        <h2>{props.active.acf.time_title}</h2>
        <h4>{props.active.acf.date_range}</h4>
        <p>{props.active.acf.time_description}</p>
      </article>
    </CSSTransition>
  );
}

export default TimelineContent;
