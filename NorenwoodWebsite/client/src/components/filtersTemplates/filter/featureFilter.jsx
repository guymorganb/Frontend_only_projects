import React, { useState, useEffect, useRef } from "react";
import { Spinner, Box, Flex, Text, IconButton, VStack ,HStack, Button, Tooltip, Input, InputGroup, InputRightElement, Center } from "@chakra-ui/react";
import { CalendarIcon, ViewIcon } from '@chakra-ui/icons';
import { sortByLocation } from "../../../utils/sortByLocation";
import Trie from '../../../utils/textSearchTrie'
import { WideCardsContainer } from "../cardTemplates/cardContainers/wideCardContainer";
import { DynamicCardContainer } from "../cardTemplates/cardContainers/dynamicCardContainer";
import { GalleryContainer } from "../cardTemplates/cardContainers/slidingGalaryContainer";
import { AboutContentContainer } from "../cardTemplates/cardContainers/about";
import { ContactContainer } from "../cardTemplates/cardContainers/contact";
import { MyCalendar } from "../cardTemplates/cardContainers/calander.jsx";
// import { RenderPagination } from "../../pagination/RenderPagination";


export const FeatureFilter = ({ cardData, secondaryNavSelection  }) => {
    // Ref for the dropdown container
    const dropdownRef = useRef();
    // set the card data
    const [items, setItems] = useState(cardData);
    // State for search query
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isLoading, setLoading] = useState(false);
    // State for the index of the currently focused suggestion
    const [focusedSuggestionIndex, setFocusedSuggestionIndex] = useState(-1);

    const trie = useRef(new Trie());
    let CardContainerComponent;
    // Populate the trie with titles from cardData
    useEffect(() => {
        // console.log(cardData)
        setItems(cardData);
        cardData.forEach(item => {
            if (item.title) {
                trie.current.insert(item.title.toLowerCase());
            }
        });
    }, [cardData]);
    
    // to-do sort by location using google cloud

    // sort by date
    const sortByDate = () => {
        // Sorting logic
        const sortedItems = [...items].sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        setItems(sortedItems);
    };

    // Function to handle search
    const handleSearch = () => {
        setLoading(true);
        
        const filteredItems = cardData.filter(item =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        setTimeout(() => {
          setItems(filteredItems);
          setSuggestions([]); // Clear suggestions after search
          setLoading(false);
        }, 1250);
      };

    const handleInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query.trim() === '') {  
            setSuggestions([]);
        } else {
            const completions = trie.current.findCompletions(query.toLowerCase());
            setSuggestions(completions);
        }
      };
      // handling the calander events in the cild component
      const handleTileClick = (title) => {
        setSearchQuery(title);
      };

    // Function to handle key press in search input
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            // ... existing Enter key logic
        } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault(); // Prevent the default input behavior

            setFocusedSuggestionIndex(prevIndex => {
                const newIndex = e.key === 'ArrowDown'
                    ? Math.min(prevIndex + 1, suggestions.length - 1)
                    : Math.max(prevIndex - 1, 0);

                // Adjust scroll position
                if (dropdownRef.current) {
                    const suggestionElements = dropdownRef.current.childNodes;
                    const focusedElement = suggestionElements[newIndex];
                    if (focusedElement) {
                        const dropdownRect = dropdownRef.current.getBoundingClientRect();
                        const focusedRect = focusedElement.getBoundingClientRect();

                        if (focusedRect.bottom > dropdownRect.bottom) {
                            dropdownRef.current.scrollTop += (focusedRect.bottom - dropdownRect.bottom);
                        } else if (focusedRect.top < dropdownRect.top) {
                            dropdownRef.current.scrollTop -= (dropdownRect.top - focusedRect.top);
                        }
                    }
                }

                return newIndex;
            });
        }
    };

        // switch statment to render the cards based off user selection from the NavBar
    switch (secondaryNavSelection) {
        case 'Schedule':
            CardContainerComponent = WideCardsContainer;
            break;
        case 'Gallery':
            CardContainerComponent = GalleryContainer
            break;
        case 'Specials':
            CardContainerComponent = DynamicCardContainer;
            break;
        case 'Contact':
            CardContainerComponent = ContactContainer
            break;
        case 'About':
            CardContainerComponent = AboutContentContainer
            break;
        default:
            CardContainerComponent = null;
            break;
    }

    return (
        <Box width={["90%", "80%", "75%"]} mx="auto" py={4} mt={24}>
                {/* Outer Flex container keeps search bar in place upon search*/}
            <Flex justifyContent="space-between" mb={4}>
                {/* Left section: Featured */}
                {((CardContainerComponent === WideCardsContainer) || (CardContainerComponent === DynamicCardContainer) || (CardContainerComponent === GalleryContainer)) && (
                <Text fontSize="2xl" fontWeight="bold" alignSelf="center">Featured</Text>
                )}

                {/* Middle section: Search bar */}
                <Box position="relative" width={["90%", "400px", "400px"]} top={["-3.5rem", "-3.5rem", "-2rem"]} alignSelf="center">
                    {(CardContainerComponent !== AboutContentContainer && CardContainerComponent !== ContactContainer) && (
                        <InputGroup size="md" m={1}>
                            <Input 
                            placeholder={CardContainerComponent === GalleryContainer ? "Category search \"fantasy, celtic\" etc..." : "Search..."}
                            value={searchQuery}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            bg="white"
                            border="1px"
                            pr="3.5rem"
                            borderColor="gray.300"
                            minW="9.5rem" 
                            >
                                
                            </Input>
                            <InputRightElement width="4.5rem" children={isLoading ? <Spinner size="md" /> : null}>
                            <Button 
                                h="1.75rem" 
                                size="sm" 
                                onClick={handleSearch} 
                                bg="transparent" 
                                _hover={{ bg: 'blue.100' }}
                                border='.5px solid gray'
                            >
                                🔎
                            </Button>
                            </InputRightElement>
                        </InputGroup>
                        )}
                    {/* Dropdown for suggestions */}
                    {suggestions.length > 0 && (
                            <VStack 
                            ref={dropdownRef}
                            align="stretch" 
                            mt="1" 
                            position="absolute"
                            width="auto"
                            zIndex="dropdown"
                            bg="rgba(255, 255, 255, 0.5)"
                            maxH="100px" // Adjust this value if necessary
                            overflowY="scroll" // Force scrollbar visibility
                            borderRadius="10"
                            boxShadow="md"
                            sx={{ // Custom scrollbar styles
                                '&::-webkit-scrollbar': {
                                    width: '8px',
                                },
                                '&::-webkit-scrollbar-track': {
                                    width: '12px',
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    background: 'gray',
                                    borderRadius: '10px',
                                },
                            }} 
                        >
                            {suggestions.slice(0, 5).map((suggestion, index) => ( // Only show first 5 suggestions
                                <Button
                                    key={index}
                                    variant="ghost"
                                    justifyContent="start"
                                    bg={index === focusedSuggestionIndex ? "#F2994A" : "transparent"} // Highlight focused item
                                    borderRadius="0"
                                    onClick={() => setSearchQuery(suggestion)}
                                >
                                    {suggestion}
                                </Button>
                            ))}
                        </VStack>
                    )}
                </Box>
                {/* Right section: View and icons */}
                <HStack spacing={4} alignSelf="center">
                    
                    {CardContainerComponent == WideCardsContainer && (
                        <>
                        <Text>View</Text>
                        <Tooltip label="Sort by Date" placement="top">
                            <IconButton aria-label="Sort by Date" icon={<CalendarIcon />} onClick={sortByDate} />
                        </Tooltip>
                        <Tooltip label="Sort by Location" placement="top">
                            <IconButton aria-label="Sort by Location" icon={<ViewIcon />} onClick={sortByLocation} />
                        </Tooltip>
                        </>
                    )}
                </HStack>
            </Flex>
                {/* Separation line */}
            <Box borderBottom="1px" borderColor="gray.200" mb={4} />
                {/* Rendering the card templates through the card container, passing in the sorted data */}
                  {/* Conditional rendering of the card containers and calander */}
                  {isLoading ? 
                    <Center> 
                        <Box height="100vh" display="flex" alignItems="top" justifyContent="center">
                            <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl"/>
                        </Box> 
                    </Center> : 
                    <>
                        {secondaryNavSelection === 'Schedule' && <MyCalendar data={items} onTileClick={handleTileClick}/>}
                        {CardContainerComponent && <CardContainerComponent data={items} />}
                    </>
                }
        </Box>
    );
};
