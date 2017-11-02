import React from 'react';
import {TweenLite} from 'gsap';


class SingleProjectContent extends React.Component{
  render(props){
    return(
      <div  className="flex-container center column"  id='boxItem'>
      <section className="display-box flex-container center column">
        <button onClick={this.props.closeProject.bind(this)} className="button-action text-inverse button-long"><h4>close</h4></button>
        {this.props.children}
      </section>
      </div>
    );
  }
}

export default SingleProjectContent;
