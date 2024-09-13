import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificate from './components/Certificate';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Certificate />
      <Footer />
    </div>
  );
}

export default App;