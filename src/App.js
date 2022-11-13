import React from 'react';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers/index';
import { CTA, Brand, Navbar } from './components/index';
import './app.css';

function App() {
  return (
    <div className='App'>
        {/* navigation section */}
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        {/* main section */}
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App