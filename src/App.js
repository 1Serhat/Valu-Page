import React, { useState } from 'react';
import Features from './component/Features/Features';
import GlobalStyle from './component/GlobalStyle';
import Hero from './component/Hero/Hero';
import Navbar from './component/Navbar/Navbar';
import SideBar from './component/Navbar/SideBar';
import Services from './component/Services/Services';
import Team from './component/Team/Team';





function App() {

  const [isOpen, setIsOpen] = useState(false);
const toggle = () => {
  setIsOpen(!isOpen);
}

  return (
    <div className="App">
      <GlobalStyle />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero />
      <Features />
      <Services />
      <Team />
    </div>
  );
}

export default App;
