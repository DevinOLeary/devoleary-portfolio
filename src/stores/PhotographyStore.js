import {observable, action, computed} from 'mobx';
import axios from 'axios';

class PhotographyStore {

  @observable picInfo = []
  @observable travelGallery = []
  @observable actionGallery = []
  @observable page = ""


  @action loadImages(){
    this.picInfo = []
    let dataUrl = 'http://localhost:8888/wordpress/wp-json/wp/v2/photos?_embed';
    return axios.get(dataUrl)
    .then(res => {
      this.picInfo = res.data
    })
    .catch(error => console.log(error))
    }

  @computed get picSort(){
    const picPage = this.picInfo.filter((pic) => {
      return pic.acf.photo_category === this.page
    })
    if(this.page === 'action'){
      return this.actionGallery = picPage;
    } else if(this.page === 'travel'){
      return this.travelGallery = picPage;
    }
  }

  @computed get groupedByTravelLocation(){
    console.log('change');
    const travelList = this.travelGallery
    const keyGetter = (pic) => (pic.acf.photo_location);
    const map = new Map();
    travelList.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if(!collection){
        map.set(key, [item]);
      } else {
        collection.push(item)
      }
    });
    return this.travelGallery = map;
  }

    @computed get groupedByActionLocation(){
      const actionList = this.actionGallery
      const keyGetter = (pic) => (pic.acf.photo_location);
      const map = new Map();
      actionList.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if(!collection){
          map.set(key, [item]);
        } else {
          collection.push(item)
        }
      });
      return this.actionGallery = map;
    }



//end of store
}



export default PhotographyStore;
