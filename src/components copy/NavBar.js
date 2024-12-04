import React from 'react';
import NavTile from './NavTile';
import './NavBar.css';

const NavBar = () => {
  const tiles = [
    {
      title: 'Collection Process',
      artist: '',
      imageUrl: 'https://media.discordapp.net/attachments/1299538244287074394/1313258566463000616/IMG_0755.jpg?ex=67517519&is=67502399&hm=16c136d6b05bc9795ca074546aff8fd32f4f5dd39ab41e6dcf04ab2e3139e772&=&format=webp&width=1272&height=1228',
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
        artist: 'Spotify Trackers',
        imageUrl: 'https://i.pinimg.com/736x/56/cf/d4/56cfd446e7b3b9256044bcb53035a154.jpg',
        targetId: 'user-information'
    },
    {
        title: 'Streaming History',
        artist: 'No Transparency',
        imageUrl: 'https://i.pinimg.com/736x/4d/0a/02/4d0a02f0fcd10ded39a59df13a274930.jpg',
        targetId: 'streaming-history'
    },
    {
        title: 'Search History',
        artist: 'Your Information',
        imageUrl: 'https://i.pinimg.com/736x/15/6b/93/156b9394703d4e3351d182ed0f1176a4.jpg',
        targetId: 'search-history'
      },
      {
          title: 'Inferences',
          artist: '',
          imageUrl: 'https://i.pinimg.com/736x/56/da/f2/56daf20928b1dec3a2edeb2f587f845d.jpg',
          targetId: 'inferences'
      },
      {
          title: 'Playlists & Marquee',
          artist: '',
          imageUrl: 'https://ma.dev.wsa.pt/wp-content/uploads/2022/07/gdpr-e1657494749939.jpg',
          targetId: 'playlists-marquee'
      },
          {
      title: 'Wrapped',
      artist: '',
      imageUrl: 'https://i.pinimg.com/736x/84/b5/a7/84b5a7d8fc35bee6c21339a81790ddd6.jpg',
      targetId: 'wrapped'
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
