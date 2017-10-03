import React from 'react';
import axios from 'axios';



class Main extends React.Component{
  constructor(){
    super();
    this.state = {
      pictures: []
    }
  }

  componentDidMount() {
    let dataUrl = 'http://localhost:8888/wordpress/wp-json/wp/v2/photos?_embed';
    axios.get(dataUrl)
    .then(res => {
      this.setState({
        pictures: res.data
      })
    })
    }

  render() {
    const pictures = this.state.pictures.map((pic) => {
      return(
        <li key={pic.date}>{pic.slug}</li>
      )
    });
    return (
        <div>
          <h1>Portfolio</h1>
          <ul>
            {pictures}
          </ul>
        </div>
    );

    }
  }

export default Main;
