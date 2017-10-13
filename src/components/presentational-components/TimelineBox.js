import React from 'react';
import {CSSTransition} from 'react-transition-group';


const TimelineBox = ({children,...props}) => (
    <tbody className="timeline-container">
      <tr>
        <td>
          {children}
        </td>
      </tr>
    </tbody>

)

export default TimelineBox;
