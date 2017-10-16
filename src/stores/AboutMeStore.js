import {observable, action, computed} from 'mobx';
import axios from 'axios';

class AboutMeStore{
  @observable timePeriodId = ''
  @observable aboutInfo = []

  @action loadAbout(){
    this.aboutInfo = []
    let dataUrl = 'http://localhost:8888/wordpress/wp-json/wp/v2/aboutme?_embed';
    return axios.get(dataUrl)
    .then(res => {
      this.aboutInfo = res.data
    })
    .catch(error => console.log(error))
    }

  @computed get activeTimePeriod(){
    return this.aboutInfo.filter((info) => (
      info.id.toString() === this.timePeriodId
    ));
  }


}




export default AboutMeStore;
