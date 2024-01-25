import { Hero } from './hero/hero.jsx';
import React, { useState, useEffect } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { TopNavContentPages } from '../homeBanner/NavbarForContentPages/topPageNav.jsx';
import { CardNavbar } from './NavbarForContentPages/cardNavigation.jsx';
import { PropogateTemplates } from '../filtersTemplates/index.jsx'

// Structure and background for the content pages
export const HeroContent = ({ currentView, changeViewFromChild }) => {

  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 480);
  const [activeLink, setActiveLink] = useState(currentView)
  
  // change the view to icons for mobile
  const handleMobileViewChange = (isMobile) => {
    setIsMobileView(isMobile);
  };

  // set the active link from the child component, this handles the top-page navbar only
  const handleActiveLinkChange = (activeLinkId) => {
    changeViewFromChild(activeLinkId)
    setActiveLink(activeLinkId)

  };

  return (
    <Flex
      direction="column" 
      width="100vw"
      height="100%"
      background="linear-gradient(0deg,#8fbc8f 15%, #deb887 70%)"
      zIndex="-2"
     
    >
      {/* <TopNavContentPages onNavLinkClick={handleActiveLinkChange}/> */}
      <Flex paddingX={{ base: "8vw", sm: "8vw", md: "8vw", lg: "8vw", xl: "8vw"   }} mt={8}>
        <Box position="relative">
          <Hero />
          <CardNavbar viewChangeFromParent={currentView} onMobileViewChange={handleMobileViewChange} onActiveLinkChange={setActiveLink} />
        </Box>
      </Flex>

      <Box mt={isMobileView ? '90px' : '40px'}>
        <PropogateTemplates secondaryNavSelection={activeLink} />
      </Box>
    </Flex>
  );
};
