import React from 'react';

import animations from '../small-components/animations';

class SingleProjectContent extends React.Component{
  componentWillEnter(cb){
    animations.fadeIn(this.box, cb);
    console.log('entered');
  }
  componentWillLeave(cb){
    animations.fadeOut(this.box, cb);
  }
  render(props){
    return(
        <div className="flex-container center column"  ref={(ref) => this.box = ref}>
          <section className="display-box flex-container center column">
            <button onClick={this.props.closeProject.bind(this)} className="button-action text-inverse button-long"><h4>close</h4></button>
            {this.props.children}
          </section>
        </div>
    );
  }
}

export default SingleProjectContent;
