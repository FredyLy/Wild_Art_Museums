import React from 'react';

import './Ham.css';
import busch from './imgHam/Busch.jpg';

function Busch () {
  return (
    <div className="hamtextandimg">
        <div>
          <img className="hamfront" src={busch} />
        </div>
        <div className="hamrightimg">
          <h1 className="hamfirsttitle">Busch–Reisinger Museum</h1>
          <p>
          The Busch-Reisinger Museum was founded in 1901 as the Germanic Museum. Unique among North American museums, the Busch-Reisinger is dedicated to the study of all modes and periods of art from central and northern Europe, with an emphasis on German-speaking countries. In 1921 the Germanic Museum moved to Adolphus Busch Hall, built partly with funds from Adolphus Busch’s son-in-law, Hugo Reisinger, and in 1950 it was renamed the Busch-Reisinger Museum. The museum moved again in 1991, this time to Werner Otto Hall at 32 Quincy Street, designed by Gwathmey Siegel & Associates.
          <br/>
          <br/>
          Adolphus Busch Hall continues to house the founding collection of plaster casts of medieval art and is the venue for concerts on its world-renowned Flentrop pipe organ, while the Busch-Reisinger Museum’s holdings include significant works of Austrian Secession art, German expressionism, 1920s abstraction, and materials related to the Bauhaus. Other strengths include late-medieval sculpture and eighteenth-century art. The museum also holds noteworthy postwar and contemporary art from German-speaking Europe.
          </p>
        </div>
      </div>
  );
}
export default Busch;
