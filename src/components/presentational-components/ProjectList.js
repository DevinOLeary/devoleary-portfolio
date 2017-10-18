import React from 'react';
import {Link} from 'react-scroll';


//components




const ProjectList = (props) => {
  //is page loaded?
  if(props.loading === true){return null}else {
    const projectFilter = props.projectInfo.filter(proj => (
      proj.acf.category !== "skills"
    ));
    // mapping of projects
    const itemList = projectFilter.map(work => {
        return (
          <li key={work.id}>
            <div className="project_item-container">
              <Link to="projectPane" smooth={true}>
              <img className="img-project_list" src={work._embedded['wp:featuredmedia']["0"].source_url}
              alt={work.slug} onClick={props.isOpen.bind(this, work.id)}/>
              </Link>
            </div>
          </li>
        )
    })
    return (
      <div>
        <section className="flex-container center row">
          <ul>
            <li><a href=""><h2>Development</h2></a><hr className="divider-colored"/></li>
            <li><a href=""><h2>Design</h2></a><hr className="divider-colored"/></li>
          </ul>
          <ul className='list_columns-container'>
            {itemList}
          </ul>
        </section>
      </div>
    );
  }



}

export default ProjectList;
