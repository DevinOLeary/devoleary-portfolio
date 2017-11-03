import React from 'react';
import {NavLink} from 'react-router-dom';
import {observer, inject} from 'mobx-react';

//components
import PicCategory from './PicCategory';
import LoadingPane from '../small-components/LoadingPane';

@inject('store')
@observer
class PhotoCategories extends React.Component {
  render(props){
    let loading = this.props.loading;
    if(loading === true){ return <LoadingPane/>}else {
      let picInfo = this.props.picInfo;
      const action = picInfo.find(pic => {
        return pic.acf.photo_category === 'action';
      });
      const travel = picInfo.find(pic => {
        return pic.acf.photo_category === 'travel';
      });

      // store specified category head image paths into variables
      const actionImage = action._embedded['wp:featuredmedia']["0"].source_url;
      const travelImage = travel._embedded['wp:featuredmedia']["0"].source_url;
      return (
        <section className="body-container">
          <div className="triangle-left"></div>
          <div className="flex-container row even-spacing">
            <div className="text-center header-pic_category">
              <NavLink to="/photography/category_action">
                <PicCategory image={actionImage} title="Action"/>
              </NavLink>
            </div>
            <div className="text-center header-pic_category">
              <NavLink to="/photography/category_travel">
                <PicCategory image={travelImage} title="Travel" {...props}/>
              </NavLink>
            </div>
          </div>
        </section>
      );
    }
  }
}


export default PhotoCategories;
