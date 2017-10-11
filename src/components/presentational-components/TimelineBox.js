import React from 'react';

const timelineBox = (props) => {
  if(props.timeline.length === 0){return null}
  const timelineList = props.timeline.map(time => (
    <td key={time.id} className="timeline-body">
      <h3>{time.acf.date_range}</h3>
      <h2>{time.acf.time_title}</h2>
      <p>{time.acf.time_description}</p>
    </td>
  ))
  return (
    <table className="flex-container center">
      <tbody className="timeline-container">
        <tr className="flex-container row">
          {timelineList}
        </tr>
      </tbody>
    </table>
  );
}

export default timelineBox;
