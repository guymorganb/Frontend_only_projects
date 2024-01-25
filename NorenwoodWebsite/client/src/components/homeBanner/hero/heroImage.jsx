import React from "react";
import { Box, Image} from '@chakra-ui/react'
import logo from '../../../assets/norenwoodHero.png'
import pineCone from '../../../assets/Ellipse4.png'
import coniferousTree from '../../../assets/Ellipse5.png'


export const HeroImage = () => {

    return(
  <Box
      pos="relative"
      display="flex"
      alignItems="end"
      justifyContent="center"
      width={{ base: '80%', md: '80%' }}
      minHeight={{ base: '250px', sm: '300px', md: '450px'}}
      order={{ base: 0, sm: 0, md: 0, lg: 0, xl:0 }}
      left={{ base: 0, sm: 0, md: 0, lg: 0, xl:0 }}
      bottom={{ base: 2, sm: 2 }}
      top={{ base: 0, sm: 0, md: 0, lg: 0, xl:0 }}
    >
       
      <Image
          src={logo}
          alt='Norenwood Logo'
          boxSize={{ base: '40%', md: '70%'}}
          h="auto"
          objectFit="contain"
      />
    <>
      <Box
        pos="absolute"
        top={{ sm: '90%', md: '85%', lg: "85%"}}
        left={{ base: 0, sm: -6, md: 0, lg: 0, xl:0 }}
        display={{ base: 'none', sm: "flex"}}
        zIndex={0}
      >
         <Image
            src={pineCone}
            alt='Pinecone'
            boxSize={{ base: '50%', sm: '40%', md: '50%', lg: "60%"}}
            h="auto"
            objectFit="contain"
          />
      </Box>
      <Box
        pos="absolute"
        top={{ sm: '95%', md: '84%', lg: "82%", xl: "65%"}}
        left={["79%"]}
        display={{ base: 'none', sm: "flex"}}
        zIndex={0}
      >
         <Image
            src={coniferousTree}
            alt='coniferous tree'
            boxSize={{ base: '80%', sm: '80%', md: '100%', lg: "100%"}}
            h="auto"
            objectFit="contain"
          />
      </Box>
    </>
      
  </Box>
  )

}