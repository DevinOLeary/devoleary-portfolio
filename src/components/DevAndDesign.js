import React from 'react';
import {inject, observer} from 'mobx-react';

//components
import Header from './Header';
import ProjectList from './presentational-components/ProjectList'

@inject('store')
@observer
class DevAndDesign extends React.Component {
  constructor(props){
    super(props);
    this.props.store.projectStore.loadProjects()
  }


  render() {
    const {projectInfo} = this.props.store.projectStore;
    return(
      <div>
        <main className="body-container">
          <Header />
          <section>
            <ProjectList info={projectInfo} category="Development"/>
          </section>
          <hr/>
          <section>
            <ProjectList info={projectInfo} category="Design"/>
          </section>
        </main>
      </div>
    );
  }
}

export default DevAndDesign;
