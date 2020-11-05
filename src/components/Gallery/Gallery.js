import Axios from 'axios';
import React, { Component } from 'react';
import NavMenuLine from '../Location/NavMenuLine';

import './Gallery.css';
class Gallery extends Component {
  state = {
    data: null
  }

  componentDidMount () {
    this.harvardArtMuseums();
  }

  harvardArtMuseums = () => {
    const url = 'https://api.harvardartmuseums.org/object?yearmade=2000&apikey=d9e8107d-41c3-4640-8213-62480cb2ad0c&page=3&size=300';
    Axios.get(url)
      .then(res => {
        const result = res.data.records.filter(item => {
          if (item.images && (item.images.length > 0)) {
            return item;
          }
        });
        this.setState({ data: [...result] });
      });
  }

  render () {
    const { data } = this.state;
    return (
      <div>
        <div className="gallery">
          { this.state.data && data.map((data) =>
            <div className="divImg" key={data.id}>
              <img className="galleryImg" src={data.images[0].baseimageurl} alt={data.title}/>
            </div>
          )}
        </div>
        <NavMenuLine />
      </div>
    );
  }
}

export default Gallery;
