import React from 'react';


import LoadingPane from '../small-components/LoadingPane';


class PicCategory extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      pic:{
        opacity: 0
      }
    }
  }

  loaded(){
    this.setState({pic: {opacity: 1, transition: '1s'}});
  }

  render(props){
    const coloredUnderline = {
      backgroundColor: `#872341`,
      borderColor: `#872341`
    }
    return(
      <div className="hover-highlight">
        <hgroup className="flex-container column center">
          <h2>{this.props.title}</h2>
          <hr className="link-underline" style={coloredUnderline}/>
        </hgroup>
        {this.props.loading ? <LoadingPane/> :
        <img className="img-categories" style={this.state.pic} src={this.props.image} alt= {this.props.title} onLoad={this.loaded.bind(this)}/>}
      </div>
    );
  }
}

export default PicCategory;
