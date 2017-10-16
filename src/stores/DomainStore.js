import {action, observable} from 'mobx';

class DomainStore{
  @observable loading = true


  @action loadingState(){
    return this.loading = false
  }
}

export default DomainStore;
