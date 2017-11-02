import React from 'react';


const WebProject = (props) => {
  return (

      <section className="display-box flex-container center column">
        <article className="display-box flex-container center column">
        <button onClick={props.closeProject.bind(this)} className="button-action text-inverse button-long"><h4>close</h4></button>
        test 1
        </article>
      </section>


  );
}

export default WebProject;
