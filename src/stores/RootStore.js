import ProjectStore from './ProjectStore';
import PhotographyStore from './PhotographyStore';
import AboutMeStore from './AboutMeStore';
import DomainStore from './DomainStore';

class RootStore {
  constructor(props){
    this.projectStore = new ProjectStore()
    this.photographyStore = new PhotographyStore()
    this.aboutMeStore = new AboutMeStore()
    this.domainStore = new DomainStore()
  }
}

export default RootStore;
