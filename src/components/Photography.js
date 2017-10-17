import React from 'react';
import {observer, inject} from 'mobx-react';
import {Route} from 'react-router-dom';

//components
import PhotoCategories from './PhotoCategories';
import PicGallery from './PicGallery';


@inject('store')
@observer
class Photography extends React.Component{
  constructor(props){
    super(props);
    this.props.store.photographyStore.loadImages();
  }
  componentWillMount(){
    this.props.store.photographyStore.loadImages();
    this.props.store.domainStore.unloadState();
  }
  componentWillUpdate(){
    if(this.props.store.photographyStore.picInfo.length > 0){this.props.store.domainStore.loadingState()}
  }


  render(){
    const {picInfo, page} = this.props.store.photographyStore;
    const {loading} = this.props.store.domainStore;
    const props = {picInfo, page, loading}
    return(
      <div className="body-container">
        <Route path="/photography" exact render={(props) => (<PhotoCategories {...props}/>)}/>

        <Route path="/photography/category_action" exact render={(props) => (<PicGallery {...props} title="Action"/>)}/>
        
        <Route path="/photography/category_travel" exact render={(props) => (<PicGallery {...props} title="Travel"/>)}/>
      </div>
    );
  }
}

export default Photography;
