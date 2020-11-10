import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import Loader from '../Loader/Loader';

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
        setTimeout(() => {
          this.setState({ data: [...result] });
        }, 1000);
      });
  }

  render () {
    const { data } = this.state;
    const decision = (
      data
        ? <div className="gallery"> {data.map((data) => <Fragment key={data.title}>{data.images.map((image) => <div className="divImg" key={image.idsid}><img className="galleryImg" src={image.baseimageurl} alt={data.title}/></div>)}</Fragment>)}
      </div>
        : <Loader loadingMsg={'Loading...'} styling={{ textAlign: 'center', marginTop: '20%', color: 'red' }}/>
    );
    return (
      decision
    );
  }
}

export default Gallery;
