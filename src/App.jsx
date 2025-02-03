import React from 'react';

import SinglePlayer from './pages/SinglePlayer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddPlayer from './pages/AddPlayer';

function App() {
  return (
    <>
      
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addPlayer" element={<AddPlayer />} />
        <Route path="/player/detail/:id" element={<SinglePlayer />} />
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
    </>
  );
}

export default App;
