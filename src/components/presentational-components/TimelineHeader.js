import React from 'react';

const TimelineHeader = (props) => {
  if(props.timelineInfo.length === 0){return null}
  const timelineHeader = props.timelineInfo.map(head => (
    <td className="timeline-header" key={head.id}>
      <a onClick={props.loadTime.bind(this, head.id)}><h4>{head.acf.time_title}</h4></a>
    </td>
  ))
  return (
      <thead>
        <tr>
         {timelineHeader}
        </tr>
      </thead>
  );
}

export default TimelineHeader;
