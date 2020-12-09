import React from 'react';

import './Ham.css';
import logo from './imgHam/Logo_Harvard.svg';

function Intro () {
  return (
        <div>
          <a target="_blank" rel="noreferrer" href="https://www.harvardartmuseums.org/">
          <img className="hamlogo" src={logo} />
          </a>
      <p className="hamintro">
      Ever since their founding, the Harvard Art Museums—the Fogg Museum, Busch-Reisinger Museum, and Arthur M. Sackler Museum—have been dedicated to advancing and supporting learning at Harvard University, in the local community, and around the world.
      <br/>
      The museums have played a leading role in the development of art history, conservation, and conservation science, and in the evolution of the art museum as an institution.
      Through research, teaching, professional training, and public education, the museums strive to advance the understanding and appreciation of art. Programs encourage close looking at original works of art, collaboration with campus and community partners, and the production of new scholarship.
      <br/>
      <br/>
      The Harvard Art Museums are comprised of three separate museums—the Fogg Museum, Busch-Reisinger Museum, and Arthur M. Sackler Museum—each with a different history, collection, guiding philosophy, and identity.
      </p>
      <p className="ham-source">Source: harvardartmuseums.org</p>
      </div>
  );
}

export default Intro;
