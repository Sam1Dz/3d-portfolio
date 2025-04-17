import React from 'react';

/* SECTIONS */
import Hero from './sections/Hero';
import Showcase from './sections/Showcase';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Showcase />
    </React.Fragment>
  );
}
