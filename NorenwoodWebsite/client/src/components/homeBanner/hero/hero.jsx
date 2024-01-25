import React from "react";
import { Image, Flex } from '@chakra-ui/react'
import backdrop from '../../../assets/backdrop.png'
import { HeroText } from "./heroText";
import { HeroImage } from "./heroImage";


export const Hero = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center" 
      position="relative"
      borderRadius={25}
      overflow="hidden"
      h={{ base: '70vh', md: '60vh' }}
      w={{ base: '85vw', md: '85vw' }} // Set width to 85% of the viewport width
      m="0 auto" // Set margin to auto to center the Flex box
      >
      {/* Render backdrop image */}
        <Image
          src={backdrop}
          alt='forest background with various shapes and designs'
          w='full'
          h='full'
          objectFit="cover"
          objectPosition="center"
          borderRadius={25}
          position="absolute"
          zIndex={0}
        />
    <HeroImage/>
    <HeroText/>
    </Flex>
  )
}
