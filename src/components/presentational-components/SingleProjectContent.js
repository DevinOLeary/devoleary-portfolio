import React from 'react';
import {CSSTransition} from 'react-transition-group';

const SingleProjectContent = ({children,...props}) => (

    <CSSTransition {...props} classNames="open" timeout={1500}>
      <div className="flex-container center column">
        <section className="display-box flex-container center column">
          {children}
        </section>
      </div>
    </CSSTransition>

);

export default SingleProjectContent;
