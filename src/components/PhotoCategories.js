import React from 'react';
import {NavLink} from 'react-router-dom';


class PhotoCategories extends React.Component {
  render(){
    return(
      <section>
        <div>
          <NavLink to="/photography/category_action">
            <h2>Action</h2>
            <img src="" alt=""/>
          </NavLink>
        </div>
        <div>
          <NavLink to="/photography/category_travel">
            <h2>Travel</h2>
            <img src="" alt=""/>
          </NavLink>
        </div>
      </section>
    );
  }
}

export default PhotoCategories;
