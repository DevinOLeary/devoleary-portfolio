import React from 'react';

const coloredUnderline = {
  backgroundColor: `rgba(223,171,28,1)`,
  borderColor: `rgba(223,171,28,1)`
}

const TimelineHeader = (props) => {
  if(props.timelineInfo.length === 0){return null}
  const timelineHeader = props.timelineInfo.slice().reverse().map(head => (
    <li className="timeline-header hover-highlight" key={head.id} id={head.id}>
      <a onClick={props.loadTime.bind(this, head.id)}>
        <h4 className={props.timePeriodId === head.id.toString() ? 'active' : ''}>{head.acf.time_title}</h4>
      </a>
      <hr className="link-underline" style={coloredUnderline}/>
    </li>
  ))
  return (
        <ul className="flex-container row center">
         {timelineHeader}
        </ul>
  );
}

export default TimelineHeader;
