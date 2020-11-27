import React from 'react';

import './Ham.css';
import busch from './Busch.jpg';

function Busch () {
  return (
    <div className="hamtextandimg">
        <div>
          <img className="hamfront" src={busch} />
        </div>
        <div className="hamrightimg">
          <h1 className="hamfirsttitle">Busch–Reisinger Museum
          </h1>
          <p>Founded in 1901 as the Germanic Museum, the Busch–Reisinger Museum is the only museum in North America dedicated to the study of art from the German-speaking countries of Central and Northern Europe in all media and in all periods.
          </p>
          <h3 className="hamhistory">Collection</h3>
          <p>The Busch-Reisinger Museum records include historical information related to the founding and functioning of the museum, from its inception
             in the early 20th century and extending into the early 21st century. The collection includes scrapbooks, postcards, photographs and slides,
              audiovisual materials, administrative and historical documents, and published materials.
          </p>
          <h3 className="hamhistory">History</h3>
          <p> William James spoke at its dedication. Its holdings include significant works of Austrian Secession art, German expressionism, 1920s
              abstraction, and material related to the Bauhaus design school. Other strengths include late medieval sculpture and 18th-century art.
              The museum also holds noteworthy postwar and contemporary art from German-speaking Europe, including works by Georg Baselitz, Anselm
              Kiefer, Gerhard Richter, and one of the worlds most comprehensive collections of works by Joseph Beuys.
              The Busch–Reisinger Art Museum has oil paintings by artists Lovis Corinth, Max Liebermann, Gustav Klimt, Edvard Munch, Paula Modersohn-Becker,
              Max Ernst, Ernst Ludwig Kirchner, Franz Marc, Karl Schmidt-Rotluff, Emil Nolde, Erich Heckel, Heinrich Hoerle, Georg Baselitz, László Moholy-Nagy,
              and Max Beckmann. It has sculpture by Alfred Barye, Kathe Kollwitz, George Minne, and Ernst Barlach. From 1921 to 1991, the Busch–Reisinger
              was located in Adolphus Busch Hall at 29 Kirkland Street. The Hall continues to house the Busch–Reisingers founding collection of medieval plaster
              casts and an exhibition on the history of the Busch–Reisinger Museum; it also hosts concerts on its Flentrop pipe organ. In 1991, the Busch–Reisinger
              moved to the new Werner Otto Hall, designed by Gwathmey Siegel and Associates, at 32 Quincy Street. In 2018, Busch–Reisinger featured Inventur–Art
              in Germany, 1943–55, which was named after a 1945 poem by Günter Eich.
          </p>
        </div>
      </div>
  );
}
export default Busch;
