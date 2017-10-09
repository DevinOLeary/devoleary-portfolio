import React from 'react';
import {NavLink} from 'react-router-dom';
import {inject, observer} from 'mobx-react';

//components
import PicCategory from './presentational-components/PicCategory';


@inject('store')
@observer
class PhotoCategories extends React.Component {



  render(){
    const store = this.props.store.photographyStore.picInfo;
    //if the store hasn't loaded, return nothing
    if(store.length === 0){return null;}
    // once the store has something, use the find() method to go through Images
    // and pic the first one that has the specified category name
    const action = store.find(pic => {
      return pic.acf.photo_category === 'action';
    });
    const travel = store.find(pic => {
      return pic.acf.photo_category === 'travel';
    });

    // store specified category head image paths into variables
    const actionImage = action._embedded['wp:featuredmedia']["0"].source_url;
    const travelImage = travel._embedded['wp:featuredmedia']["0"].source_url;

    return(
      <section className="flex-container row even-spacing">
        <div className="text-center">
          <NavLink to="/photography/category_action">
            <PicCategory image={actionImage} title="Action"/>
          </NavLink>
        </div>
        <div className="text-center">
          <NavLink to="/photography/category_travel">
            <PicCategory image={travelImage} title="Travel"/>
          </NavLink>
        </div>
      </section>
    );
  }
}

export default PhotoCategories;
