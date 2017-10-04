import React from 'react';
import {observer, inject} from 'mobx-react';
import {Route} from 'react-router-dom';

//components
import Header from './Header';
import PhotoCategories from './PhotoCategories';
import ActionGallery from './ActionGallery';
import TravelGallery from './TravelGallery';

@inject('store')
@observer
class Photography extends React.Component{

  componentWillMount() {
    return this.props.store.loadImages();
  }


  render(){

    return(
      <div className="body-container">
        <Header />
        <Route path="/photography" exact component={PhotoCategories}/>
        <Route path="/photography/category_action" exact component={ActionGallery}/>
        <Route path="/photography/category_travel" exact component={TravelGallery}/>
      </div>
    );
  }
}

export default Photography;
