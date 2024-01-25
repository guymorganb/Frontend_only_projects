import React, {useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { Box, Flex } from '@chakra-ui/react';


 // Assuming this is your events

 export const MyCalendar = ({ data, onTileClick }) => {
    const [events, setEvents] = useState([]);
  
    useEffect(() => {
        setEvents(data);
      }, [data]);

      const reformatDate = (dateStr) => {
        let d = new Date(dateStr),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
      }
   
  
    return (
        <Flex justifyContent="center" alignSelf="center">
        <Box borderRadius="8px" boxShadow="lg" p="6">
            <Calendar 
            tileContent={({ date, view }) => {
                // Convert the date object to 'yyyy-mm-dd' format
                const formatDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

                // Check if this date exists in your events
                const match = events?.find(event => reformatDate(event.date) === formatDate);

                // Show a box around each day, and add a dot if there's an event match
                return (
                <Box 
                    border="1px" 
                    borderColor="gray.300" 
                    display="flex" 
                    justifyContent="center" 
                    alignItems="center"
                    p={1}
                    onClick={() => { if (match) { onTileClick(match.title); } }}
                >
                    {match && <Box color="red" ml={1} as="span">•</Box>}
                </Box>
                );
            }}
            />
        </Box>
    </Flex>
  );
};