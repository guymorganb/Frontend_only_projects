import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";


export const Announcement = () => {

    let marqueeText = "This text is for testing purposes hope it works ";
    let marquee = Array(10).fill(marqueeText); 

    return(
        <Box>
        <Button type="button"
            w="100%"
            p="1em 1"
            
            left={0}
            top="18vh"
            zIndex={-1}
            overflow="hidden"
            whiteSpace="nowrap"
            position="absolute"
            display="flex"
            color="#E5E42E"
            
            lineHeight="1"
            fontSize="1.25rem"
            textTransform="uppercase"
            fontFamily="Work Sans"
            border="none"
            borderBottom="2px solid #E5E4E2"
            backgroundColor="black"
            _hover={{ backgroundColor: "rgba(51, 51, 51, 0.025)",
            "> span": { animationPlayState: "paused" } // Targeting child spans on hover
          }}
          sx={{
            "@keyframes marquee": {
              to: { transform: "translateX(-100%)" },
            }
          }}
        >
        {marquee.map((item, index) => (
          <Text 
            key={index}
            as="span" 
            sx={{
              animation: `marquee ${10}s infinite normal linear`,
              padding: "0 0.5em",
            }}>{item}</Text>
        ))}

        </Button>
      </Box>

    )
}