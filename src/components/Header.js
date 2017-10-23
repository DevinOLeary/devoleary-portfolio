import React from 'react';
import {NavLink} from 'react-router-dom';
import MobileMenu from './presentational-components/MobileMenu';


class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      windowSize: 'mobile',
      menuOpen: false
    }
  }


  updateOnResize(){
    if(window.innerWidth < 700){
      this.setState({windowSize: 'mobile'})
    } else {this.setState({windowSize: 'desktop'})}
  }

  openMobileMenu(e){
    e.preventDefault();
    let openStatus = this.state.menuOpen;
    this.setState({menuOpen: !openStatus});
  }

  componentDidMount(){
    this.updateOnResize();
    window.addEventListener("resize", this.updateOnResize.bind(this));
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.updateOnResize.bind(this));
  }

  render(){
    const coloredUnderline = {
      backgroundColor: `rgba(223,171,28,1)`,
      borderColor: `rgba(223,171,28,1)`
    }
    if(this.state.windowSize === 'mobile'){
      return(
        <header className="mobile_menu-header">
          <a onClick={this.openMobileMenu.bind(this)}><h4>menu</h4></a>
          <div>
            <MobileMenu isOpen={this.state.menuOpen}/>
          </div>
        </header>
      )
    } else {
      return(
        <div>
          <header className="header-subpage flex-container center">
            <nav className="full-width">
              <ul className="nav-bar flex-container">
                <li className="hover-highlight">
                  <NavLink exact to="/">home</NavLink>
                  <hr className='link-underline' style={coloredUnderline}/>
                </li>
                <li className="hover-highlight">
                  <NavLink to="/photography">photography</NavLink>
                  <hr className='link-underline' style={coloredUnderline}/>
                </li>
                <li className="hover-highlight">
                  <NavLink to="/dev&design">development & design</NavLink>
                  <hr className='link-underline' style={coloredUnderline}/>
                </li>
                <li className="hover-highlight">
                  <NavLink to="/about">about me</NavLink>
                  <hr className='link-underline' style={coloredUnderline}/>
                </li>
              </ul>
            </nav>
          </header>
          <hr className="divider-colored"/>
          <br/>
        </div>
      );
    }
  }
}

export default Header;
