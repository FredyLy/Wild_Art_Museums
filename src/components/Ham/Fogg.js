import React from 'react';

import './Ham.css';
import fogg from './Fogg.jpg';

function Fogg () {
  return (
    <div className="hamtextandimg">
    <div>
      <img className="hamfront" src={fogg} />
    </div>
    <div className="hamrightimg">
      <h1 className="hamfirsttitle">Fogg Museum
      </h1>
      <p>The Fogg Museum, opened to the public in 1896, is the oldest and largest component of the Harvard Art Museums.
      </p>
      <h3 className="hamhistory">History</h3>
      <p>The museum was originally
      housed in an Italian Renaissance-style building designed by Richard Morris Hunt. According to Donald Preziosi, the museum was not initially
      established as a gallery for the display of original works of art, but was founded as an institution for the teaching and study of visual arts,
      and the original building contained classrooms equipped with magic lanterns, a library, an archive of slides and photographs of art works,
      and exhibition space for reproductions of works of art. In 1925, the building was replaced by a Georgian Revival-style structure on Quincy Street,
      designed by Coolidge, Shepley, Bulfinch, and Abbott. The original Hunt Hall remained, underutilized until it was demolished in 1974 to make way
      for new freshman dormitories.
      </p>
      <h3 className="hamcollection">Collection</h3>
      <p>
      The Fogg Museum is renowned for its holdings of Western paintings, sculpture, decorative arts, photographs,
      prints, and drawings from the Middle Ages to the present. Particular strengths include Italian Renaissance, British Pre-Raphaelite, and French
      art of the 19th century, as well as 19th- and 20th-century American paintings and drawings.
      The museums Maurice Wertheim Collection is a notable group of impressionist and post-impressionist works that contains many famous masterpieces,
      including paintings and sculptures by Paul Cézanne, Edgar Degas, Édouard Manet, Henri Matisse, Pablo Picasso, and Vincent van Gogh. Central to the Foggs
      holdings is the Grenville L. Winthrop Collection, with more than 4,000 works of art. Bequeathed to Harvard in 1943, the collection continues to play
      a pivotal role in shaping the legacy of the Harvard Art Museums, serving as a foundation for teaching, research, and professional training programs.
      It includes important 19th-century paintings, sculpture, and drawings by William Blake, Edward Burne-Jones, Jacques-Louis David, Honoré Daumier,
      Winslow Homer, Jean Auguste Dominique Ingres, Alfred Barye, Pierre-Auguste Renoir, Auguste Rodin, John Singer Sargent, Henri de Toulouse-Lautrec,
      and James Abbott McNeill Whistler.
      The art museum has Late Medieval Italian paintings by the Master of Offida, Master of Camerino, Bernardo Daddi, Simone Martini, Luca di Tomme,
      Pietro Lorenzetti, Ambrogio Lorenzetti, Master of Orcanesque Misercordia, Master of Saints Cosmas and Damiançand Bartolomeo Bulgarini.
      </p>
    </div>
  </div>
  );
}
export default Fogg;
