import React, {useState} from 'react';
import './styles/main.css';
import BgHeader from './assets/work-desk__dustin-lee.jpg';
import Logo from './assets/y-logo-white.png';

import Notification from './components/Notification.js';
import Header from './components/Header.js';
import Highlights from './components/Highlights.js';

function App() {

  // Notivicatioan
  const [buttonNotiv, setButtonNotiv] = useState(false);
  
  const handleButtonNotiv = () => {
    setButtonNotiv(!buttonNotiv);
    setLogoPosition("absolute top-0 left-0 mt-5 ml-10 z-10");
  }

  // Header
  const [logoPosition, setLogoPosition] = useState("absolute top-0 left-0 mt-32 ml-10 z-10");

  // Newsletter
  const [buttonNews, setButtonNews] = useState(false);

  const handleButtonNews = () => {
    setButtonNews(!buttonNews);
  }

  return (
    <div className="App">
      {<Notification buttonNotiv={buttonNotiv} handleButtonNotiv={handleButtonNotiv} />}
      <Header BgHeader={BgHeader} Logo={Logo} logoPosition={logoPosition}/>
      <Highlights buttonNews={buttonNews} handleButtonNews={handleButtonNews} />
    </div>
  );
}

export default App;
