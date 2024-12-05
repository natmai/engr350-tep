import React from 'react';
import './NavTile.css';

const NavTile = ({ title, artist, imageUrl, targetId }) => {
  const handleClick = () => {
    if (targetId.startsWith('http')) {
      window.open(targetId, '_blank', 'noopener,noreferrer');
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="nav-tile" onClick={handleClick}>
      <div className="tile-image-wrapper">
        <img src={imageUrl} alt={title} className="tile-image" />
        <div className="play-button-overlay">
          <button className="play-button">▶</button>
        </div>
      </div>
      <p className="tile-title">{title}</p>
      <p className="tile-artist">{artist}</p>
    </div>
  );
};

export default NavTile;
