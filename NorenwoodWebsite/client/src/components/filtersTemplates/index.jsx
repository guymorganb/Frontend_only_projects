import React, { useState, useEffect, useMemo } from "react";
import { FeatureFilter } from '../filtersTemplates/filter/featureFilter.jsx'
import mockData from '../../../mockData.json'
import mocData2 from '../../../mockData2.json'


export const PropogateTemplates = ({ secondaryNavSelection }) => {
    // console.log("Received secondaryNavSelection in PropogateTemplates:", secondaryNavSelection);
    const [cardDataObject, setCardDataObject] = useState([]);
    const [secondaryNav, setSecondaryNav] = useState(secondaryNavSelection);
    
    // check what tab the nav bar is on to render the content --to-do: this needs work


    useEffect(() => {
        switch (secondaryNavSelection) {
            case 'Schedule':
                setCardDataObject(mockData);
                break;
            case 'Gallery':
                
                setCardDataObject(mocData2);
                
                break;
            case 'Specials':
                setCardDataObject(mocData2);
                break;
            case 'Contact':
               
                break;
            case 'About':
               
                break;
            default:
                break;
        }
    }, [secondaryNavSelection]);

    useEffect(() => {
        console.log("cardDataObject updated:", cardDataObject);
    }, [cardDataObject]);

    return (
        <>
        <FeatureFilter cardData={cardDataObject} secondaryNavSelection={secondaryNavSelection} />
        </>
    );
};
