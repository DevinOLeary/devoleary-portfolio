import ProjectStore from './ProjectStore';
import PhotographyStore from './PhotographyStore';

class RootStore {
  constructor(props){
    this.projectStore = new ProjectStore()
    this.photographyStore = new PhotographyStore()
  }
}

export default RootStore;
