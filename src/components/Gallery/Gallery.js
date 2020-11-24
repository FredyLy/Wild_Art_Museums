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
            <button onClick={this.closeModal}>X</button>
          </div>
          <div className="modalBody">
          <div className="comicImage">
            <a href={characterInfos.primaryimageurl} target='_blank' rel="noopener noreferrer" ><img src={characterInfos.primaryimageurl} alt={characterInfos.title} /></a>
          </div>
          <div className="comicDetails">
          <h3>Identification and Creation</h3>
            <p>People : </p>
            <p>Title : {characterInfos.title}</p>
            <p>Classification : {characterInfos.classification}</p>
            <p>Work Type : </p>
            <p>Date : {characterInfos.dated}</p>
            <p>Period : {characterInfos.period}</p>
            <p>Culture : {characterInfos.culture}</p>

          <h3>Physical Descriptions</h3>
            <p>Medium : {characterInfos.medium}</p>
            <p>Dimension : {characterInfos.dimensions}</p>

          <h3>Provenance </h3>
            <p>{characterInfos.provenance}</p>

          <h3>Acquisition and rights</h3>
            <p>Credit Line : Harvard Art Museums/Arthur M. Sackler Museum, Ernest B. and Helen Pratt Dane Fund for the Acquisition of Oriental Art </p>
            <p>Accession Year : {characterInfos.accessionyear}</p>
            <p>Object Number : {characterInfos.objectnumber}</p>
            <p>Division : {characterInfos.division}</p>
            <p>Contact : {characterInfos.contact}</p>

            <p>The Harvard Art Museums encourage the use of images found on this website for personal, noncommercial use, including educational and scholarly purposes.
            To request a higher resolution file of this image, please submit an online request.</p>

            <p>This record was created from historic documentation and may not have been reviewed by a curator; it may be inaccurate or incomplete. Our records are frequently revised and enhanced.
              For more information please contact the {characterInfos.division} at am_asianmediterranean@harvard.edu</p>
            <a className="btn-info" href={characterInfos.url} target='_blank' rel="noopener noreferrer" >More info</a>
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
          {resultInModal}
        </Modal>
      </Fragment>
    );
  }
}

export default Gallery;
