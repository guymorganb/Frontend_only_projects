import React, { useState, useEffect } from 'react';
import { Box} from '@chakra-ui/react';
// import { RenderPagination } from '../../../pagination/RenderPagination';
import { floatingGallery } from '../gallery/floatingGallery.jsx';

export const GalleryContainer = ({ data }) => {

    const [items, setItems] = useState([]);

    const putItemsInArray = (items) => {
        const groupedData = [];
        for (let i = 0; i < items.length; i++) {
            groupedData.push(items);
        }
        console.log("groupedData", groupedData) 
        return groupedData;
    };
    

    useEffect(() => {
        setItems(putItemsInArray(data));
    }, [data]);

    return (
        <Box>
           {items.map((item, index) => (
                <floatingGallery key={index} data={item} />
            ))}
        </Box>
    );
};
