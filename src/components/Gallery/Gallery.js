import Axios from 'axios';
import React, { Component } from 'react';

// const century21 = '37525824';
class Gallery extends Component {
  state = {
    data: null
  }

  componentDidMount () {
    this.harvardArtMuseums();
  }

  harvardArtMuseums = () => {
    // const url = `https://api.harvardartmuseums.org/century/${century21}?apikey=d9e8107d-41c3-4640-8213-62480cb2ad0c&page=3`;
    const url = 'https://api.harvardartmuseums.org/object?yearmade=2002&apikey=d9e8107d-41c3-4640-8213-62480cb2ad0c&page=3';
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
    console.log(this.state.data);
    const { data } = this.state;
    return (
      <div className="Gallery">
        { this.state.data && data.map((data) =>
          <div key={data.id}>
            <p>{data.culture}</p>
            <p>{data.title}</p>
            <p>{data.dated}</p>
            <p>{data.dimensions}</p>
            <p>{data.classification}</p>
            {/* <p>{data.worktypes}</p> */}
            <p>{data.classification}</p>
            {/* <p>{data.worktypes}</p> */}
            <p>{data.copyright}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Gallery;
