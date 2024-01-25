import React, { useRef, useEffect } from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';
// import mockData2 from '../mockData2';

export const Gallery = ({ data }) => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;

    const handleMouseMove = (e) => {
      const mouseX = e.clientX,
        mouseY = e.clientY;

      const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;

      const maxX = gallery.offsetWidth - window.innerWidth,
        maxY = gallery.offsetHeight - window.innerHeight;

      const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;

      gallery.animate(
        {
          transform: `translate(${panX}px, ${panY}px)`,
        },
        {
          duration: 4000,
          fill: 'forwards',
          easing: 'ease',
        }
      );
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
<Flex>
  <Box 
    ref={galleryRef} 
    h="140vmax" 
    w="140vmax">
     {data.map((item, index) => (
      <Box
        key={index}
        borderRadius="1vmax"
        position="absolute"
        transition="transform 800ms ease-in-out"
        _hover={{
          transform: "scale(1.1)",
          "> img": {
            opacity: 1,
            transform: "scale(1.01)",
          },
        }}
        style={{
            ...(index === 0 ? {
                  backgroundColor: "rgb(255, 238, 88)",
                  height: "14%",
                  width: "20%",
                  left: "5%",
                  top: "5%",
                } : index === 1 ? {
                  backgroundColor: "rgb(66, 165, 245)",
                  height: "24%",
                  width: "14%",
                  left: "42%",
                  top: "12%",
                } : index === 2 ? {
                  backgroundColor: "rgb(239, 83, 80)",
                  height: "18%",
                  width: "16%",
                  left: "12%",
                  top: "34%",
                } : index === 3 ? {
                  backgroundColor: "rgb(102, 187, 106)",
                  height: "14%",
                  width: "12%",
                  left: "45%",
                  top: "48%",
                } : index === 4 ? {
                  backgroundColor: "rgb(171, 71, 188)",
                  height: "16%",
                  width: "32%",
                  left: "8%",
                  top: "70%",
                } : index === 5 ? {
                  backgroundColor: "rgb(255, 167, 38)",
                  height: "24%",
                  width: "24%",
                  left: "68%",
                  top: "8%",
                } : index === 6 ? {
                  backgroundColor: "rgb(63, 81, 181)",
                  height: "16%",
                  width: "20%",
                  left: "50%",
                  top: "74%",
                } : index === 7 ? {
                  backgroundColor: "rgb(141, 110, 99)",
                  height: "24%",
                  width: "18%",
                  left: "72%",
                  top: "42%",
                } : index === 8 ? {
                  backgroundColor: "rgb(250, 250, 250)",
                  height: "10%",
                  width: "8%",
                  left: "84%",
                  top: "84%",
                } : {}),
          }}
      >
       <Image 
        src={item.image} // Use item.image here
        height="100%"
        width="100%"
        objectFit="cover"
        borderRadius="inherit"
        opacity={0}
        transition="opacity 800ms ease, transform 800ms ease"/>
      </Box>
    ))}
  </Box>
</Flex> 
  );
}
