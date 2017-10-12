import {observable, action, computed} from 'mobx';
import axios from 'axios';

class AboutMeStore{
  @observable timelineInfo = []
  @observable timePeriodId = ''


  @action loadTimeline(){
    this.timelineInfo = []
    let dataUrl = 'http://localhost:8888/wordpress/wp-json/wp/v2/aboutme?_embed';
    return axios.get(dataUrl)
    .then(res => {
      this.timelineInfo = res.data
    })
    .catch(error => console.log(error))
    }

  @computed get activeTimePeriod(){
    return this.timelineInfo.filter((info) => (
      info.id.toString() === this.timePeriodId
    ));
  }


}




export default AboutMeStore;
