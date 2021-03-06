import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import Location from '../Location/Location';
import LocationMobile from '../LocationMobile/LocationMobile';
import Modal from '../Modal/Modal';
import Loading from '../Home/Loading';

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
    resultInModal: true,
    title: 'GALLERY'
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
    this.setState({ openModal: true });
    this.setState(({ characterInfos: id }));
    this.setState(({ resultInModal: false }));
  }

  closeModal = () => {
    this.setState({ openModal: false });
    this.setState(({ resultInModal: false }));
  }

  render () {
    const { data } = this.state;
    const decision = (data
      ? <div className="container-gallery"> {data.map((data) =>
        <Fragment key={data.title}>
          {data.images.map((image) =>
            <div onClick={() => this.showModal(data)} className="gallery-img" key={image.idsid}>
              <img src={image.baseimageurl} alt={data.title}/>
            </div>)
          }
        </Fragment>)}
      </div>
      : <Loading />);

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
              <a href={characterInfos.primaryimageurl} target='_blank' rel="noopener noreferrer" >
                <img src={characterInfos.primaryimageurl} alt={characterInfos.title} />
              </a>
          </div>

          <div className="comicDetails">
              <h3>Identification and Creation</h3>

                {characterInfos.people &&
                  <p><div className="modal-span">People</div>{characterInfos.people.map((people, i) => {
                    return (
                      <div className="description-content" key={i}>{people.name}</div>
                    );
                  })}</p>
                }

                {characterInfos.title && <p><div className="modal-span">Title</div><div className="description-content">{characterInfos.title}</div></p>}

                {characterInfos.classification && <p><div className="modal-span">Classification</div><div className="description-content">{characterInfos.classification}</div></p>}

                {characterInfos.worktypes &&
                  <p><div className="modal-span">Work Type</div><div className="description-content">{characterInfos.worktypes.map((worktype, i) => {
                    return (
                      <span key={i}>{worktype.worktype}</span>
                    );
                  })}
                  </div></p>
                }

                {characterInfos.dated && <p><div className="modal-span">Date</div><div className="description-content"> {characterInfos.dated}</div></p>}

                {characterInfos.period && <p><div className="modal-span">Period</div> <div className="description-content">{characterInfos.period}</div></p>}

                {characterInfos.culture && <p><div className="modal-span">Culture</div> <div className="description-content">{characterInfos.culture}</div></p>}

              <br/>
              <h3>Physical Descriptions</h3>

                {characterInfos.medium && <p><div className="modal-span">Medium</div><div className="description-content">{characterInfos.medium}</div></p>}

                {characterInfos.technique && <p><div className="modal-span">Technique</div><div className="description-content">{characterInfos.technique}</div></p>}

                {characterInfos.dimensions && <p><div className="modal-span">Dimension</div><div className="description-content">{characterInfos.dimensions}</div></p>}

              <br/>
              <h3>Provenance </h3>

                {characterInfos.provenance && <p><div className="description-content">{characterInfos.provenance}</div></p>}

              <br/>
              <h3>Acquisition and rights</h3>

                {characterInfos.creditline && <p><div className="modal-span">Credit Line</div> <div className="description-content">{characterInfos.creditline}</div></p>}

                {characterInfos.accessionyear && <p><div className="modal-span">Accession Year</div> <div className="description-content">{characterInfos.accessionyear}</div></p>}

                {characterInfos.objectnumber && <p><div className="modal-span">Object Number</div> <div className="description-content">{characterInfos.objectnumber}</div></p>}

                {characterInfos.division && <p><div className="modal-span">Division</div> <div className="description-content">{characterInfos.division}</div></p>}

                {characterInfos.contact && <p><div className="modal-span">Contact</div> <div className="description-content">{characterInfos.contact}</div></p>}

                <p className="modal-copy">
                  The Harvard Art Museums encourage the use of images found on this website for personal, noncommercial use, including educational and scholarly purposes.
                  To request a higher resolution file of this image, please submit an online request.
                  <br/>
                  This record was created from historic documentation and may not have been reviewed by a curator; it may be inaccurate or incomplete. Our records are frequently revised and enhanced.
                  For more information please contact the {characterInfos.division} at: am_asianmediterranean@harvard.edu
                </p>

                <a href={characterInfos.url} target='_blank' rel="noopener noreferrer">More Info</a>
          </div>
        </div>
      </Fragment>)

      : (
      <Fragment>
        <div className="modalHeader">
          <h2>Chargement</h2>
        </div>
        <div className="modalBody">
          <Loading />
        </div>
      </Fragment>
        );

    return (
      <Fragment>
        <div className="gallery-media-location">
          <Location title={this.state.title} />
        </div>
        <div className="gallery-media-locationMob">
        <LocationMobile />
        </div>
        { decision }
        <div className="divBouton">
          <a className="scrolltop" href="#top">
            <input className="gallery.btn round" disabled={displayBtnPrev} type='button' value='<<' onClick={() => this.harvardArtMuseums(this.state.url.prev)} />
          </a>
          <a className="scrolltop" href="#top">
            <input className="gallery.btn round" disabled={displayBtnNext} type='button' value='>>' onClick={() => this.harvardArtMuseums(this.state.url.next)} />
          </a>
        </div>
        <Modal showModal={this.state.openModal} closeModal={this.closeModal}>
          {resultInModal}
        </Modal>
      </Fragment>
    );
  }
}

export default Gallery;
