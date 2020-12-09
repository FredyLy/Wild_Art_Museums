import facebook from './imgHam/facebook.png';
import instagram from './imgHam/instagram.png';
import github from './imgHam/github.png';
import twitter from './imgHam/twitter.png';
import map from './imgHam/map.png';
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
