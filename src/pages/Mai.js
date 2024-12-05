import React from 'react';
import './Mai.css';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components copy/NavBar';
import ScrollToTop from '../components/ScrollToTop';


const Mai = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/spotify/mai');
  };

  return (
    <div id="#"className="app-container">


      {/* Nav Bar */}
      <section className="section">
        <h2 className='white-h2'>Recently played</h2>
        <NavBar /> 
      </section>


      {/* Hero Section */}
      <section className="hero">
        <h1>Mai Spotify Data</h1>
        <p>Learn what Spotify tracks!</p>
      </section>

    

      {/* Collection Process */}
      <section id="collection-process"className="section">
        <h2>Collection Process</h2>
        <div className="subsection">
          <h3>How do you get YOUR data?</h3>
          <p>
              Spotify makes it really annoying to collect your data. You can only do it on the web version of the application. 
          </p>
      
        </div>
        <div className="subsection">
          <h3>Data Diving!</h3>
          <p>
            After a couple of weeks, I finally got an email! It sent me to download a file
          </p>
          <img className='flowchart' src='https://i.imgur.com/HPXmfIo.png'></img>
        </div>
      </section>

      {/* Location Section */}
      <section id="location"className="section">
        <h2>Location</h2>
        <div className="privacy-impact-diagram">Spotify’s tracks some notable things. Ever wondered how Spotify can track an artist's top country?</div>
        <img className='tall-img' src='https://i.imgur.com/5Q2WH0b.png'></img>
        <img className='flowchart' src='https://i.imgur.com/QnP8hSV.png'></img>
        <div className="privacy-impact-diagram">It's because they track's your address!</div>
      </section>

      {/* User Information Section */}
      <section id="user-information"className="section">
        <h2>User Information</h2>
        <img className='tall-img' src='https://i.imgur.com/N2JEr2K.png'></img>
        <div className="privacy-impact-diagram"> Spotify also tracks some interesting things about your account. It checks if your account is linked to a Facebook UID and your mobile service provider.
        Because of this they can facilitate personalized ads while creating a comprehensive profiling based on personal, contact, and device data</div>
      </section>

      {/* Streaming History Section */}
      <section id="streaming-history"className="section">
        <h2>Streaming History</h2>
        <img className='tall-img' src='https://i.imgur.com/INZWekA.png'></img>
        <div className="privacy-impact-diagram"> 
          Something pretty obvious is that your streaming history is tracked. It shows how long the user streamed a song in milli-seconds. 
        </div>
      </section>



      {/* Search History Section */}
      <section id="search-history"className="section">
        <h2>Search History</h2>
        <img className='tall-img' src='https://i.imgur.com/FbHs7oZ.png'></img>
        <div className="privacy-impact-diagram"> 
            A recent Search History list is visible to the user. However did you know it tracks which device you searched on? Or even the fact that it documents incomplete searches? It also tracks if you click on a song or not. 
        </div>
      </section>

      {/* Inferences Section */}
      <section id="inferences"className="section">
        <h2>Inferences</h2>
        <img className='flowchart' src='https://i.imgur.com/nwNZ8Z2.png'></img>
        <div className="privacy-impact-diagram"> 
            Inferred traits and behaviors raise transparency concerns about how user data is interpreted and used. Sharing detailed inferences with advertisers could lead to sensitive data misuse.

        </div>
      </section>

      {/* Playlists and Marquee Section */}
      <section id="playlists-marquee"className="section">
        <h2>Playlists and Marquee</h2>
        <img className='flowchart' src='https://i.imgur.com/l5KuJR7.png'></img>
        <div className="privacy-impact-diagram"> 
            One of the main ways Spotify is able to bring you such a personal experience is the fact that they document your current playlists and take from that. 
        </div>
        <img className='flowchart' src='https://i.imgur.com/UBJ2z3g.png'></img>
        <div className="privacy-impact-diagram"> 
          They also track EVERY artist you have ever listened to. They rank them into 4 Categories.
          <ol>
            <li>Previously Active Listeners</li>
            <li>Light listeners</li>
            <li>Moderate listeners</li>
            <li>Super Listeners</li>
          </ol>  
          This enables the algorithm to keep bringing you artists you still currently like (Super Listeners) or even hit you with some throwbacks (Previously Active Listeners).
        </div>
      </section>
      
      {/* Wrapped Section */}
      <section id="wrapped"className="section">
        <h2>Spotify Wrapped</h2>
        <img className='tall-img' src='https://i.imgur.com/iY902di.png'></img>
        <div className="privacy-impact-diagram"> 
            Lastly, the Wrapped data. It tracks everything you see on your yearly recap. Ultimately all of this raises concerns about over-collection and normalizes Companies collecting our private data.
        </div>
      </section>


      {/* Footer */}
      <footer className="footer">
        <p>made with ♡ for ENGR 350</p>
        <div className="social-links">by mai</div>
      </footer>

    </div>
  );
};

/* https://imgur.com/a/Rlkhz5Q */

export default Mai;
