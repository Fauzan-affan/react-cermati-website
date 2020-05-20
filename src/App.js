import React, { useState, useEffect } from 'react';
import './styles/main.css';
import BgHeader from './assets/work-desk__dustin-lee.jpg';
import Logo from './assets/y-logo-white.png';

import Aos from 'aos';
import 'aos/dist/aos.css';

import Notification from './components/Notification.js';
import Header from './components/Header.js';
import Highlights from './components/Highlights.js';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter.js';

function App() {

  // Notivicatioan
  const [buttonNotiv, setButtonNotiv] = useState(false);

  const handleButtonNotiv = () => {
    setButtonNotiv(true);
  }

  // Newsletter
  const [buttonNews, setButtonNews] = useState(false);

  const handleButtonNews = () => {
    const el = document.querySelector(".newsletter");
    el.removeAttribute("data-aos");
    el.setAttribute("data-aos", "slide-up");
    // setButtonNews(true);
  }

  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, [])

  // Footer
  const [Tanggal] = useState(new Date().getFullYear());

  return (
    <div className="App">
      {<Notification buttonNotiv={buttonNotiv} handleButtonNotiv={handleButtonNotiv} />}
      <Header BgHeader={BgHeader} Logo={Logo} />
      <Highlights />
      <Footer Tanggal={Tanggal} />
      <Newsletter buttonNews={buttonNews} handleButtonNews={handleButtonNews} />
    </div>
  );
}

export default App;
