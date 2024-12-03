import React from 'react';
import './Spotify.css';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';


const Spotify = () => {
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
        <h1>From Songs to Surveillance</h1>
        <p>Understanding Spotify’s Data Collection, Ethical Concerns, and User Privacy</p>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="section">
        <h2>What Makes Spotify So Personal?</h2>
        <p>
          Spotify is the number one music streaming service and the leading audio streaming subscription service worldwide. 
          The company's success stems from its unique ability to provide highly personalized song selections for millions of users.
        </p>
        <p>
          The convenience of personalized playlists often overshadows the potential risk of privacy breaches. Users are frequently unaware of the amount and type of personal data Spotify gathers, which includes listening behavior, search queries, and even geolocation data.
        </p>
        <img className='split-image' src="https://storage.googleapis.com/production-eng/1/2023/11/EN208-ACM-Blog-header-Final-1200x590-1.png"></img>
      </section>

      {/* How Spotify Collects Data */}
      <section id="data-collection"className="section">
        <h2>Behind the Music: How Spotify Collects Your Data</h2>
        <div className="subsection">
          <h3>User Behavior Tracking</h3>
          <p>
            Spotify collects extensive user data through tracking listening habits, genre preferences, time of day, and location to feed its algorithms.
            Every song you play, every skip, and every repeat provides Spotify with valuable insights into your musical preferences and behaviors.
          </p>
          <p>
          By analyzing the user's preferences and identifying relevant musical elements such as tempo and rhythm, Spotify leverages the data to curate precise and engaging playlists. Though this data allows Spotify to enhance its personalized experience, it raises questions about the necessity and intrusiveness of data collection practices.
          </p>
        </div>
        <div className="subsection">
          <h3>Privacy Settings and Lack of User Control</h3>
          <p>
            Spotify's privacy policy often lacks clarity, making it challenging for users to understand what data they are sharing.
            Many settings are opt-out rather than opt-in, meaning users are automatically enrolled in data-sharing features without explicit consent.
          </p>
          <p>
            While Spotify may argue its practices reflect its strategy to optimize user engagement and ad effectiveness, excessive tracking is intrusive.
          </p>
        </div>
        <blockquote>
         "(Spotify) feels a lot more private than Facebook or other social media platforms because you're feeding its algorithms in a different way" - Matt Burgess, senior writer @ WIRED, focused on security, privacy, and data.
        </blockquote>
        <div className="flowchart">[Flowchart: Spotify Data Collection Process]</div>
      </section>

      {/* Ethical Issues Section */}
      <section id="ethical-concerns"className="section">
        <h2>Ethical Concerns: Consent, Transparency, and Surveillance</h2>
        <p>
          Spotify’s data practices often extend beyond music recommendations, raising ethical concerns about user consent and transparency.
          The platform's ability to track behavior across different contexts blurs the line between personalization and surveillance.
        </p>
        <blockquote>
          "We may obtain certain data about you, such as cookie id, mobile device id, or email address, and inferences about your interests and preferences from certain advertisers and advertising partners that allow us to deliver more relevant ads and measure their effectiveness" - Spotify
        </blockquote>
        <p>
          Spotify's lack of transparency makes it difficult for users to make informed decisions about their privacy. It takes advantage of users who lack sufficient awareness to navigate these settings.
        </p>
        <div className="privacy-impact-diagram">[Privacy Impact Diagram]</div>
      </section>

      {/* Spotify Wrapped Section */}
      <section id="spotify-wrapped" className="section">
        <h2>Spotify Wrapped: A Fun Experience or a Data Trap?</h2>
        <p>
          Spotify Wrapped is an annual feature that spotlights users' listening statistics from the year and is a powerful example of how Spotify reinvents and markets data collection as trendy, shareable, and celebrated. Spotify Wrapped uses data to create personalized yearly summaries, making data collection appear fun and engaging.
          However, it also encourages users to accept and celebrate how much Spotify knows about them, creating a culture of passive consent to extensive data surveillance.
        </p>
    
          <img className="split-image" src="https://www.app.com/gcdn/authoring/authoring-images/2023/11/29/USAT/71735370007-top-5-artists-trendline.png"></img>
  
        <p>
          Wrapped not only tracks your favorite songs and artists but also deduces your moods and habits throughout the year. By sharing Wrapped on social media, users are unknowingly endorsing Spotify's practices and contributing to the normalization of corporate data collection.

          Wrapped, Spotify's annual recap of user data, is a perfect example of how the company turns extensive data collection into an engaging user experience. By presenting data collection as a fun social activity to share, Spotify reduces user resistance to its extensive data practices. 

        </p>
        
      </section>

      {/* Emotional Analysis Section */}
      <section id="patent"className="section">
        <h2>The Dark Side of Emotional Analysis</h2>
        <p>
          Spotify's controversial patent allows it to detect emotional states through voice recognition, raising significant privacy concerns.
          The technology can analyze the tone, stress, and pitch of a user's voice to determine their emotional state, which is then used to recommend music.
        </p>
        <p>
          While this may seem like a convenient feature, it also means that Spotify could potentially monitor private conversations or background noises without explicit user consent, blurring the line between helpful personalization and invasive surveillance.
        </p>
        <div className="emotional-analysis-illustration">
          <img src='https://research.aimultiple.com/wp-content/uploads/2024/08/figure-1-1-612x392.png.webp'></img>
        </div>
      </section>

      {/* Legal Landscape Section */}
      <section id="legal"className="section">
        <h2>The Legal Battle Over Your Data</h2>
        <p>
          GDPR in the EU provides better privacy protection compared to US regulations. Spotify was fined $5.4 million for GDPR violations in Sweden.
          The fine highlights the inadequacies in Spotify's approach to user data and transparency, especially regarding how users' data is processed and stored.
        </p>
        <p>
          In contrast, the US lacks comprehensive federal regulations for data privacy, making it difficult for users to have the same level of control over their personal data. This regulatory gap leaves users vulnerable to data exploitation without proper recourse.
        </p>
        <img className='world-map' src='https://infographicjournal.com/wp-content/uploads/2019/06/privacylaws-feat.jpg'></img>
      </section>

      {/* Call for Greater User Control */}
      <section id="protect-yourself"className="section">
        <h2>How Can Users Protect Themselves?</h2>
        <p>
          Users should take steps to protect their data, while Spotify should prioritize transparency and user control.
          Educating oneself on privacy settings and making conscious decisions about data sharing are vital for maintaining control over one's digital footprint.
        </p>
        <ul className="privacy-tips">
          <li>Review privacy settings regularly and disable unnecessary tracking features.</li>
          <li>Opt-out of data collection when possible, especially from features like personalized ads.</li>
          <li>Be aware of the information you share, especially on social media when linking accounts.</li>
        </ul>
      </section>

      {/* Conclusion Section */}
      <section id="conclusion"className="section">
        <h2>Balancing Personalization and Privacy</h2>
        <p>
          Spotify's personalization comes at a cost to user privacy. Companies must balance user satisfaction with respect for privacy.
          While personalized music recommendations can be beneficial, they should not come at the expense of user rights. By prioritizing transparency and giving users more control over their data, Spotify has the potential to set an industry standard for ethical data use.
        </p>
        <div className="scales-visual">[Scales: Personalization vs. Privacy]</div>
      </section>

      {/* Interactive Section */}
      <section id="mai-data"className="interactive-section">
        <h2>What Does Spotify Know About You?</h2>
        <p>Read about what I found about when I downloaded my Spotify Data!</p>

        <button className="cta-button" onClick={handleButtonClick}>Read more</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>made with ♡ for ENGR 350</p>
        <div className="social-links">by mai</div>
      </footer>
    </div>
  );
};

export default Spotify;
