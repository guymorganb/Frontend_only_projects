// Expand cards
import React from 'react'
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { Section } from './section';
import logo from '../../assets/norenwoodHero.png'
export const ExpandCard = ({onNavigate}) => {
    const sections = [
      {
        name: "Contact",
        backgroundImage: "https://images.unsplash.com/photo-1522205987242-8e22924ab42a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c0f679eb8f15705d46ea90008f39642b&auto=format&fit=crop&w=500&q=60",
        href: "Contact",
      },
      {
        name: "Home",
        backgroundImage: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8aG91c2V8fDB8fHx8MTYzMDU3NjY4NA&ixlib=rb-1.2.1&q=80&w=1080",
        href: "Schedule",
      },
      {
        name: "Gallery",
        backgroundImage: "https://images.unsplash.com/photo-1566264956500-0549ed17e161?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
        href: "Gallery",
      },
    ];

    const handleSectionClick = (url) => {
        // Navigate to the URL
        onNavigate(url);
      };


    return (
      <Box boxSizing="border-box">
        <Flex h="100vh">
        {sections.map((section, index) => (
          <Section key={section.name} backgroundImage={section.backgroundImage} onClick={() => handleSectionClick(section.href)}>
            {index === 1 && (
              
            <Box      
                position="absolute"
                flexDirection="column"
                top={0}
                right={0}
                bottom={0}
                left={0}
                display="flex"
                alignItems="center"
                zIndex={3}
                objectFit="contain"
                transition="background-color .8s ease"
                _hover={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
            >
                <Image
                    src={logo}
                    alt='Norenwood Logo'
                    boxSize={{ base: '40%', md: '35%'}}
                    h="auto"
                    objectFit="contain"
                />
                <Text
                    fontFamily="EB Garamond"
                    lineHeight="1.2"
                    fontWeight="bold"
                    fontSize={{ base: "1rem", sm: "1.5rem", md: "2rem", lg: "2rem", xl:'2rem' , "2xl":'2.25rem' }}
                    textShadow="1px 1px 1px rgba(255, 255, 255, 0.8), -1px -1px 1px rgba(0, 0, 0, 0.2),4px 4px 5px rgba(0, 0, 0, 0.5),1px 1px 2px rgba(0, 0, 0, 0.1)"
                >
                    <Text as="span" color="#F2994A">
                        🍃NOREN
                    </Text>
                    {''}
                    <Text as="span" color="#8fbc8f">
                        WOOD🍃
                    </Text>
                </Text>
            </Box>
            )}
            <Text zIndex={3}  >{section.name}</Text>
          </Section >
        ))}
        </Flex>
      </Box>
    );
  };
  
