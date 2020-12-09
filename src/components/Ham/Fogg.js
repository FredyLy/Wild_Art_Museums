import React from 'react';

import './Ham.css';
import fogg from './imgHam/Fogg.jpg';

function Fogg () {
  return (
    <div className="hamtextandimg">
      <div>
        <img className="hamfront" src={fogg} />
      </div>
      <div className="hamrightimg">
        <h1 className="hamfirsttitle">Fogg Museum</h1>
        <p>The Fogg Museum opened in 1895 on the northern edge of Harvard Yard in a modest Beaux-Arts building designed by Richard Morris Hunt, twenty-one years after the President and Fellows of Harvard College appointed Charles Eliot Norton the first professor of art history in America. It was made possible when, in 1891, Mrs. Elizabeth Fogg gave a gift in memory of her husband to build “an Art Museum to be called and known as the William Hayes Fogg Museum of Harvard College.” In 1927, the Fogg Museum moved to its home at 32 Quincy Street.
          <br/>
          <br/>
        Designed by architects Coolidge, Shepley, Bulfinch, and Abbott of Boston, the joint art museum and teaching facility was the first purpose-built structure for the specialized training of art scholars, conservators, and museum professionals in North America. With an early collection that consisted largely of plaster casts and photographs, the Fogg Museum is now renowned for its holdings of Western paintings, sculpture, decorative arts, photographs, prints, and drawings dating from the Middle Ages to the present.
        </p>
      </div>
    </div>
  );
}

export default Fogg;
