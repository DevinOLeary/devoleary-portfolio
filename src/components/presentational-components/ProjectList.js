import React from 'react';
import {Link} from 'react-scroll';


//components
import CategoryHeader from '../small-components/CategoryHeader';




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
      <div className="flex-container center full-width">
      <div className="triangle-left"></div>
        <section className="flex-container center row open_content-container">
          <ul className="flex-container row center full-width">
            <li className="project_cat-header"><CategoryHeader title='development' {...props} onClick={props.updateCategoryList}/></li>
            <li className="project_cat-header"><CategoryHeader title='design' {...props} onClick={props.updateCategoryList}/></li>
            <li className="project_cat-header"  ><CategoryHeader title='all' {...props} onClick={props.updateCategoryList}/></li>
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
