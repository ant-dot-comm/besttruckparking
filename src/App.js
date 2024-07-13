import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Footer, Header } from './components';
import { Landing, Locations, HowItWorks } from './pages';

import './App.scss';

const App = () => {
  return (
    <Router>
      <div className='w-full'>
        <Header/>
        
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/besttruckparking/locations" element={<Locations />} />
          <Route path="/besttruckparking/how-it-works" element={<HowItWorks />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
