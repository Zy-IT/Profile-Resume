//Author:: Zyril A. Paraoan
import React from 'react';
import ScrollToTop from './Components/ScrolltoTop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ProjectsAchievements from './pages/Projects/ProjectsAchievements';
import Contacts from './pages/Contacts/Contacts';

function App() {

  return (
    <BrowserRouter>
      <div className='App-container'>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Projects&Achievements' element={<ProjectsAchievements />} />
          <Route path='/Contacts' element={<Contacts /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );

}

export default App;
