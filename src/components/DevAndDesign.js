import React from 'react';
import {inject, observer} from 'mobx-react';

//components
import Header from './Header';
import ProjectList from './small_components/ProjectList'

@inject('store')
@observer
class DevAndDesign extends React.Component {
  constructor(props){
    super(props);
    this.props.store.projectStore.loadProjects()
  }
  render() {
    const {projectInfo} = this.props.store.projectStore;
    if(projectInfo.length === 0) {return null;}
    console.log(projectInfo)
    return(
      <div className="body-container">
        <Header />
        <section>
          <ProjectList info={projectInfo} category="Development"/>
        </section>
        <hr/>
        <section>
          <ProjectList info={projectInfo} category="Design"/>
        </section>
      </div>
    );
  }
}

export default DevAndDesign;
