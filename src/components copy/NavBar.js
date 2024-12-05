import React from 'react';
import NavTile from './NavTile';
import './NavBar.css';

const NavBar = () => {
  const tiles = [
    {
      title: 'Collection Process',
      artist: '',
      imageUrl: 'https://i.imgur.com/iBzP47b.jpeg',
      targetId: 'collection-process'
    },
    {
        title: 'Location',
        artist: 'Playboi Carti',
        imageUrl: 'https://i1.sndcdn.com/artworks-hnMnZaRBChed-0-t500x500.jpg',
        targetId: 'location'
    },
    {
        title: 'User Information',
        artist: '',
        imageUrl: 'https://i.pinimg.com/736x/56/cf/d4/56cfd446e7b3b9256044bcb53035a154.jpg',
        targetId: 'user-information'
    },
    {
        title: 'Streaming History',
        artist: '',
        imageUrl: 'https://i.pinimg.com/736x/cb/54/10/cb5410ae82bb789a203348c7fb1f7e75.jpg',
        targetId: 'streaming-history'
    },
    {
        title: 'Search History',
        artist: '',
        imageUrl: 'https://i.pinimg.com/736x/27/14/6e/27146e391942bb9abf36bf32cdac9d9e.jpg',
        targetId: 'search-history'
      },
      {
          title: 'Inferences',
          artist: '',
          imageUrl: 'https://i.pinimg.com/736x/0e/16/3d/0e163d8ee0ff7e6d6fb09d269ee9c8be.jpg',
          targetId: 'inferences'
      },
      {
          title: 'Playlists & Marquee',
          artist: '',
          imageUrl: 'https://i.pinimg.com/736x/21/0e/60/210e60e71d9fe8207932c8f12625ffcc.jpg',
          targetId: 'playlists-marquee'
      },
          {
      title: 'Wrapped',
      artist: '',
      imageUrl: 'https://i.pinimg.com/736x/64/92/f7/6492f71f0e5e19a7bfad4f76dae36fde.jpg',
      targetId: 'wrapped'
    },
    
    {
        title: 'mai spotify account',
        artist: 'olive',
        imageUrl: 'https://media.discordapp.net/attachments/1277491270347915375/1313977261330006087/image.jpg?ex=6752182f&is=6750c6af&hm=ea5487f522efdca9bd2b51882d6066cbf2990367b8eddfe3583b7dc1fc4a03ce&=&format=webp&width=690&height=1226',
        targetId: 'https://open.spotify.com/user/nateqmai?si=39fae9ebfd7c48f3'
    },
    
  ];

  return (
    <div className="nav-bar">
      {tiles.map((tile, index) => (
        <NavTile
          key={index}
          title={tile.title}
          artist={tile.artist}
          imageUrl={tile.imageUrl}
          targetId={tile.targetId} 
        />
      ))}
    </div>
  );
};

export default NavBar;
