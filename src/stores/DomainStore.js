import {action, observable} from 'mobx';

class DomainStore{
  @observable loading = true


  @action loadingState(){
    return this.loading = false
  }
  @action unloadState(){
    return this.loading = true
  }
}

export default DomainStore;
