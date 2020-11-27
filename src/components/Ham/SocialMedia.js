import facebook from './facebook.png';
import instagram from './instagram.png';
import github from './github.png';
import twitter from './twitter.png';
import map from './map.png';
import './Ham.css';

function SocialMedia () {
  return (
    <div className="hamsocialMedia">
      <a target="_blank" rel="noreferrer" href="https://www.facebook.com/harvardartmuseums">
      <img className='hamimg' src={facebook} />
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/harvardartmuseums/">
      <img className='hamimg' src={instagram} />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/harvardartmuseums">
      <img className='hamimg' src={github} />
      </a>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/harvartmuseums">
      <img className='hamimg' src={twitter} />
      </a>
      <a target="_blank" rel="noreferrer" href="https://g.page/harvardartmuseums?share">
      <img className='hamimg' src={map} />
      </a>
    </div>
  );
}

export default SocialMedia;
