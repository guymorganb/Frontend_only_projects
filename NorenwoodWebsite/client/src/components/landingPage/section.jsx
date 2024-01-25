import React from 'react'
import { Box, Flex, Link, Text, Image, Button, Grid, GridItem } from "@chakra-ui/react";

export const Section = ({ backgroundImage, children, onClick }) => {
    return (
    <Flex
      flex={1}
      justifyContent="center"
      alignItems="center"
      h="100%"
      overflow="hidden"
      bgSize="cover"
      bgPosition="center"
      color="#ffffff"
      transition="flex 0.5s ease"
      position="relative"
      _hover={{ flex: 2 }}
      backgroundImage={backgroundImage}
      
    >
      <Box
        top={0}
        right={0}
        bottom={0}
        left={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex={2}
        fontSize="4xl"
        transition="background-color .8s ease"
        _hover={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
        borderRadius="10px"
      >
      <Link
        onClick={onClick}
        position="absolute"
        top={0}
        right={0}
        bottom={0}
        left={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex={2}
        fontSize="4xl"
        transition="background-color .8s ease"
        _hover={{ backgroundColor: "rgba(0, 0, 0, 0.95)", textDecoration: "underline" }}
        w="100%"
        h="100%"
      >
        {children}
      </Link>
      </Box>
      <Box
        backgroundColor="rgba(0, 0, 0, 0.7)"
        w="100%"
        h="100%"
        position="absolute"
        transition="background-color .8s ease"
        _hover={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
      />
    </Flex>
  );
}