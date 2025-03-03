import React from 'react'
import Navbar from './Navbar'
import ImageCarousel from './ImageCarousel'
// import SearchSection from './SearchSection'
import DestinationCards from './DestinationCards'
// import Gallery from './Gallery'
import VideoCard from './VideoCard'
import ContactSection from './ContactSection'
import LoginPage from './Login'
import TravelLandingPage from './omesh'
import './Navbar.css'
import Sidebar from './TourTravels'
// import TourTravels from './TourTravels'
const All = () => {
    return (
        <>
            <Navbar />
            <hr/>
            <ImageCarousel />
            <DestinationCards />
            <VideoCard />
            <ContactSection />
            {/* <Sidebar /> */}
            {/* <TourTravels /> */}
            {/* <TravelLandingPage/> */}
            {/* // <LoginPage />   */}
        </>
    )
}

export default All