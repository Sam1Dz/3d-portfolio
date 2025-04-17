import React from 'react';

/* SECTIONS */
import Hero from './sections/Hero';
import Navbar from './components/Navbar';
import Company from './sections/Company';
import Showcase from './sections/Showcase';

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Showcase />
      <Company />
    </React.Fragment>
  );
}
