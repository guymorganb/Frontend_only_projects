import React, { useState } from 'react'
import { HeroContent } from '../src/components/homeBanner/index.jsx' 
import { ExpandCard } from './components/landingPage/landing.jsx';



function App() {
  const [currentView, setCurrentView] = useState('/');
  
  const handleNavigate = (url) => {
    console.log(url);
    setCurrentView(url);
  };
  const clientId = `320440515782-44rgq2pmnk3j9in9t1f8g94jjom619vh.apps.googleusercontent.com`
  return (
    <>
    {/* <GoogleOAuthProvider clientId={clientId}> */}
      {currentView === '/' && <ExpandCard onNavigate={handleNavigate} />}
      {currentView === 'Schedule' && <HeroContent currentView={currentView} changeViewFromChild={handleNavigate}/>}  
      {currentView === 'Gallery' && <HeroContent currentView={currentView}/>} 
      {currentView === 'Contact' && <HeroContent currentView={currentView} changeViewFromChild={setCurrentView}/>}
    {/* </GoogleOAuthProvider> */}
    </>
  )
}

export default App
