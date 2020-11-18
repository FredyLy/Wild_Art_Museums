import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import Loader from '../Loader/Loader';
import Location from '../Location/Location';

import './Gallery.css';

class Gallery extends Component {
  state = {
    data: null,
    url: {
      current: 'https://api.harvardartmuseums.org/object?yearmade=1986&apikey=d9e8107d-41c3-4640-8213-62480cb2ad0c&page=1&size=100',
      prev: null,
      next: null
    }
  }

  componentDidMount () {
    this.harvardArtMuseums(this.state.url.current);
  }

  harvardArtMuseums = (url) => {
    console.log(this.state.url);
    Axios.get(url)
      .then(res => {
        const result = res.data.records.filter(item => {
          if (item.images && (item.images.length > 0)) {
            return item;
          }
        });
        this.setState({
          data: [...result],
          url: {
            prev: res.data.info.prev,
            next: res.data.info.next
          }
        });
      });
  }

  render () {
    const { data } = this.state;
    console.log(data);
    const decision = (data
      ? <div className="gallery"> {data.map((data) => <Fragment key={data.title}>{data.images.map((image) =>
      <div className="gallery-divImg" key={image.idsid}>
        <img className="galleryImg" src={image.baseimageurl} alt={data.title}/></div>)}</Fragment>)}
      </div>
      : <Loader loadingMsg={'Loading...'} styling={{ textAlign: 'center', marginTop: '20%', color: 'red' }}/>);

    const displayBtnNext = !this.state.url.next;
    const displayBtnPrev = !this.state.url.prev;

    return (
      <Fragment>
        <Location />
        { decision }
        <div className="divBouton">
          <input className="gallery.btn round" disabled={displayBtnPrev} type='button' value='<<' onClick={() => this.harvardArtMuseums(this.state.url.prev)} />
          <input className="gallery.btn round" disabled={displayBtnNext} type='button' value='>>' onClick={() => this.harvardArtMuseums(this.state.url.next)} />
        </div>
      </Fragment>
    );
  }
}

export default Gallery;
