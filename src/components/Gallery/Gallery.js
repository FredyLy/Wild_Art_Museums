import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import Loader from '../Loader/Loader';
import Location from '../Location/Location';
import Modal from '../Modal/Modal';

import './Gallery.css';

class Gallery extends Component {
  state = {
    data: null,
    url: {
      current: 'https://api.harvardartmuseums.org/object?yearmade=1986&apikey=d9e8107d-41c3-4640-8213-62480cb2ad0c&page=1&size=100',
      prev: null,
      next: null
    },
    openModal: false,
    characterInfos: [],
    resultInModal: true
  }

  componentDidMount () {
    this.harvardArtMuseums(this.state.url.current);
    // this.showModal();
    // this.showModal(this.state.characterInfos);
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.characterInfos !== prevState.characterInfos) {
      this.showModal(this.state.characterInfos);
    }
  }

  harvardArtMuseums = (url) => {
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

  showModal = id => {
    console.log('id', id);
    const { characterInfos } = this.state;
    this.setState({ openModal: true });

    // this.setState((prevState) => ({ characterInfos: prevState.id }));
    this.setState(({ characterInfos: id }));
    this.setState(({ resultInModal: false }));
    console.log('Modal', characterInfos);
  }

  closeModal = () => {
    this.setState({ openModal: false });
    this.setState(({ resultInModal: false }));
  }

  render () {
    const { data } = this.state;
    const decision = (data
      ? <div className="gallery"> {data.map((data) =>
      <Fragment key={data.title}>
        {data.images.map((image) =>
          <div onClick={() => this.showModal(data)} className="gallery-divImg" key={image.idsid}>
            <img className="galleryImg" src={image.baseimageurl} alt={data.title}/>
          </div>)
        }
      </Fragment>)}
      </div>
      : <Loader loadingMsg={'Loading...'} styling={{ textAlign: 'center', marginTop: '20%', color: 'red' }}/>);

    const displayBtnNext = !this.state.url.next;
    const displayBtnPrev = !this.state.url.prev;

    const { characterInfos, loadingModal } = this.state;

    const resultInModal = !loadingModal
      ? (
      <Fragment>
        <div className="modalHeader">
            <h2>{characterInfos.title}</h2>
          </div>
          <div className="modalBody">
          <div className="comicImage">
            <a href={characterInfos.primaryimageurl} target='_blank' rel="noopener noreferrer" ><img src={characterInfos.primaryimageurl} alt={characterInfos.title} /></a>
            {/* <h3>{characterInfos.images[0].idsid}</h3> */}
          </div>
          <div className="comicDetails">
          <h3>Description</h3>
            <p>{characterInfos.division}</p>
            <p>{characterInfos.description}</p>
            <p>{characterInfos.provenance}</p>
            {/* <p>{characterInfos.people[0].alphasort}</p> */}
            <h3>More info</h3>
            <p>{characterInfos.contact}</p>
            <a href={characterInfos.url} target='_blank' rel="noopener noreferrer" >More info</a>
          </div>
        </div>
      </Fragment>)
      : (
      <Fragment>
        <div className="modalHeader">
            <h2>Chargement</h2>
          </div>
          <div className="modalBody">
            <Loader loadingMsg={'Loading...'} styling={{ textAlign: 'center', marginTop: '20%', color: 'red' }}/>
          </div>
      </Fragment>);

    return (
      <Fragment>
        <Location />
        { decision }
        <div className="divBouton">
          <input className="gallery.btn round" disabled={displayBtnPrev} type='button' value='<<' onClick={() => this.harvardArtMuseums(this.state.url.prev)} />
          <input className="gallery.btn round" disabled={displayBtnNext} type='button' value='>>' onClick={() => this.harvardArtMuseums(this.state.url.next)} />
        </div>
        <Modal showModal={this.state.openModal} closeModal={this.closeModal}>
          {/* <div className="modalHeader">
            <h2>{characterInfos.title}</h2>
          </div>
          <div className="modalBody"> */}
            {/* <img src={characterInfos.images[0].baseimageurl} alt={characterInfos.title} /> */}
            {/* <h3>{characterInfos.division}</h3> */}
            {/* <h3>{characterInfos.id}</h3> */}
          {/* </div>
          <div className="modalFooter">
            <button className="modalBtn">fermer</button>
          </div> */}
          {resultInModal}
        </Modal>
      </Fragment>
    );
  }
}

export default Gallery;
