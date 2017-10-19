import React from 'react';
import {Link} from 'react-scroll';


//components




const ProjectList = (props) => {
  //is page loaded?
  if(props.loading === true){return null}else {
    // mapping of projects
    const itemList = props.filteredProjects.map(work => {
        return (
          <Link to="projectPane" smooth={true} key={work.id}>
            <li onClick={props.isOpen.bind(this, work.id)}>
              <div className="project_list_img-container">
                <div className="project_list_img-overlay">
                  <h4 className="text-inverse">{work.acf.title}</h4>
                </div>
                <img src={work._embedded['wp:featuredmedia']["0"].source_url} alt={work.acf.title}/>

              </div>
            </li>
          </Link>
        )
    })
    return (
      <div className="flex-container center">
        <section className="flex-container center row open_content-container">
          <ul className="flex-container row even-spacing full-width">
            <li className="flex-container column center hover-highlight" onClick={props.updateCategoryList.bind(null,'development')}><a><h2>Development</h2></a><br/><hr className="dash-vertical"/></li>
            <li className="flex-container column center hover-highlight" onClick={props.updateCategoryList.bind(null, 'design')}><a><h2>Design</h2></a><br/><hr className="dash-vertical"/></li>
            <li className="flex-container column center hover-highlight" onClick={props.updateCategoryList.bind(null, '')}><a><h2>All</h2></a><br/><hr className="dash-vertical"/></li>
          </ul>
          <ul className='flex-container row center'>
            {itemList}
          </ul>
        </section>
      </div>
    );
  }



}

export default ProjectList;
