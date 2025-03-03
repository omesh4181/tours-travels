import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'boxicons/css/boxicons.min.css';
import './App.css';
// import './Components/DestinationCards.css'

import Navbar from './Components/Navbar';
import ImageCarousel from './components/ImageCarousel';
import SearchSection from './components/SearchSection';
import DestinationCards from './components/DestinationCards';
import Gallery from './components/Gallery';
import VideoCard from './components/VideoCard';
import ContactSection from './components/ContactSection';
import LoginPage from './Components/Login';
import { Routes, Route } from 'react-router-dom';
import All from './Components/All';
import TourTravels from './Components/TourTravels';
import Signup from './Components/Sign';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<All />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/home' element={<TourTravels />}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        {/* <Route path='./signup' element={<sigup/>}></Route> */}
        {/* <Route path='Login' element={<TourTravels/>}></Route> */}
      </Routes>

    </div>
  );
}

export default App;