import React from 'react';




class HeadShot extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      pic:{}
    }
  }

  loadPic(){
    this.setState({pic: {opacity: 1, transition: '1s'}});
  }
  render(props){
    const headshot = this.props.aboutInfo.find(info => (
      info.acf.category ===  'headshot'
    ));
    return(
      <img src={headshot._embedded['wp:featuredmedia']["0"].source_url}
      alt={headshot.acf.category}
      className="headshot" style={this.state.pic} onLoad={this.loadPic.bind(this)}/>
    );
  }
}

export default (HeadShot);
