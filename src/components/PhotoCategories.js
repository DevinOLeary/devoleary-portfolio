import React from 'react';
import {NavLink} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import ContentFadeIn from './small-components/ContentFadeIn';

//components
import PicCategory from './presentational-components/PicCategory';


@inject('store')
@observer
class PhotoCategories extends React.Component {



  render(){
    const {picInfo} = this.props.store.photographyStore;
    const {loading} = this.props.store.domainStore;
    //if the store hasn't loaded, return nothing
    if(store.length === 0){return null;}
    // once the store has something, use the find() method to go through Images
    // and pic the first one that has the specified category name
    const action = picInfo.find(pic => {
      return pic.acf.photo_category === 'action';
    });
    const travel = picInfo.find(pic => {
      return pic.acf.photo_category === 'travel';
    });

    // store specified category head image paths into variables
    const actionImage = action._embedded['wp:featuredmedia']["0"].source_url;
    const travelImage = travel._embedded['wp:featuredmedia']["0"].source_url;

    return(
      <section className="flex-container row even-spacing">
        <div className="text-center animated fadeInDown header-pic_category">
          <ContentFadeIn in={}
          <NavLink to="/photography/category_action">
            <PicCategory image={actionImage} title="Action"/>
          </NavLink>
        </div>
        <div className="text-center animated fadeInDown header-pic_category">
          <NavLink to="/photography/category_travel">
            <PicCategory image={travelImage} title="Travel"/>
          </NavLink>
        </div>
      </section>
    );
  }
}

export default PhotoCategories;
