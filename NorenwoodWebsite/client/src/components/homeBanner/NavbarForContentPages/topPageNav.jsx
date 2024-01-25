import { Box, HStack, Text, Link, Image, Flex } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import { TopNavImage } from './navImg';
import { Announcement } from '../../announcementBar/announcement';

export const TopNavContentPages = ({ onNavLinkClick }) => {
  const navItems = ["Home", "Contact"];


  // determine the link //to-do fix this
  const setLink = targetText => {
    const link = targetText === "Home" ? "/" : targetText === "Contact" ? "Contact" : null;
    // passing the prop up to the parent
    console.log(link)
    onNavLinkClick(link);
    }

  return (
    <Flex
        justify="space-between" 
        paddingY={2} 
        paddingX={6} 
        width="85%" 
        mx="auto" 
        background="transparent"
        mixBlendMode="darken"
      >
      <TopNavImage/>
      <Announcement/>
      <HStack spacing={4}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              // href={setLink(item)}
              onClick={(e) => setLink(e.target.innerText)}
              fontFamily="Noto"
              lineHeight="1.5"
              fontWeight="semibold"
              color="#000000"
              p={2}
              borderRadius="md"
              _hover={{ 
                bg: "gray.100",
                color: "#F2994A", 
                textDecoration: "underline", 
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.25)" // Shadow on hover
              }}
            >
              {item}
            </Link>
          ))}
      </HStack>
    </Flex>
  );
};
