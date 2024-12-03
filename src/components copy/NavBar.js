import React from 'react';
import NavTile from './NavTile';
import './NavBar.css';

const NavBar = () => {
  const tiles = [
    {
      title: 'Collection Process',
      artist: 'Winter',
      imageUrl: 'https://i.imgur.com/KLRGP0S.png',
      targetId: '#'
    },
    {
        title: 'Location',
        artist: 'Ariana Grande',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Ariana_Grande_-_Eternal_Sunshine.png',
        targetId: 'introduction'
    },
    {
        title: 'User Information',
        artist: 'Spotify Trackers',
        imageUrl: 'https://i.imgur.com/ZW7v5J6.png',
        targetId: 'data-collection'
    },
    {
        title: 'Streaming History',
        artist: 'No Transparency',
        imageUrl: 'https://i.pinimg.com/736x/4d/0a/02/4d0a02f0fcd10ded39a59df13a274930.jpg',
        targetId: 'ethical-concerns'
    },
    {
        title: 'Search History',
        artist: 'Your Information',
        imageUrl: 'https://i.pinimg.com/736x/15/6b/93/156b9394703d4e3351d182ed0f1176a4.jpg',
        targetId: 'spotify-wrapped'
      },
      {
          title: 'Inferences',
          artist: 'Controversial Patent',
          imageUrl: 'https://i.pinimg.com/736x/56/da/f2/56daf20928b1dec3a2edeb2f587f845d.jpg',
          targetId: 'patent'
      },
      {
          title: 'Playlists & Marquee',
          artist: 'GDPR',
          imageUrl: 'https://ma.dev.wsa.pt/wp-content/uploads/2022/07/gdpr-e1657494749939.jpg',
          targetId: 'legal'
      },
          {
      title: 'Wrapped',
      artist: 'Education',
      imageUrl: 'https://i.pinimg.com/736x/84/b5/a7/84b5a7d8fc35bee6c21339a81790ddd6.jpg',
      targetId: 'protect-yourself'
    },
    
    {
        title: 'my spotify data!',
        artist: 'mai',
        imageUrl: 'https://i.pinimg.com/736x/8d/ec/15/8dec15cb39025f3790f06ba201f89dc9.jpg',
        targetId: 'mai-data'
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
