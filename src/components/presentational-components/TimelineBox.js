import React from 'react';


const TimelineBox = (props) => {
  if(props.timelineInfo.length === 0){return null}
  const info = props.activeTimePeriod;
  let timeBody = null;
  if (info.length > 0){
    timeBody = (
      <article>
        <h2>{info[0].acf.time_title}</h2>
        <h4>{info[0].acf.date_range}</h4>
        <p>{info[0].acf.time_description}</p>
      </article>
    )
  }
  return (
    <tbody className="timeline-container">
      <tr>
        <td>
          {timeBody}
        </td>
      </tr>
    </tbody>
  );
}

export default TimelineBox;
