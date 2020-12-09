import React from 'react';

import './Ham.css';
import sackler from './imgHam/Sackler.jpg';

function Sackler () {
  return (
    <div className="hamtextandimg">
      <div>
        <img className="hamfront" src={sackler} />
      </div>
      <div className="hamrightimg">
        <h1 className="hamfirsttitle">Arthur M. Sackler Museum</h1>
        <p>
        In 1912, Langdon Warner taught the first courses in Asian art at Harvard, and the first at any American university. By 1977, Harvard’s collections of Asian, ancient, and Islamic and later Indian art had grown sufficiently in size and importance to require a larger space for their display and study. With the generosity of Dr. Arthur M. Sackler, a leading psychiatrist, entrepreneur, art collector, and philanthropist, the Harvard Art Museums founded a museum dedicated to works from Asia, the Middle East, and the Mediterranean.
          <br/>
          <br/>
        The Arthur M. Sackler Museum, a new museum building at 485 Broadway designed by James Stirling, opened in 1985. This structure remains the home of the History of Art and Architecture Department and the Media Slide Library.
        </p>
      </div>
    </div>
  );
}

export default Sackler;
