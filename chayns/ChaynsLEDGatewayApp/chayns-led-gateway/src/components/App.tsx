import { Accordion, AccordionContent, AccordionGroup, Button } from '@chayns-components/core';
import React, { useState, JSX, useEffect } from 'react';
import LightControl from './lightControl/LightControl';

const App = () => {
    
    const [sections, setSections] = useState<JSX.Element[]>();
    const rooms: string[] = ["Wohnzimmer", "Küche", "Schlafzimmer", "Büro", "Flur", "Badezimmer"];

    useEffect(() => {
        createSections();
    }, []);


    const createSections = () => {
        
        let tempSections: JSX.Element[] = [];
        
        rooms.forEach((room: string) => {
            tempSections.push(
                <Accordion key={room} title={room}>
                    <AccordionContent>
                        <LightControl />
                    </AccordionContent>
                </Accordion>
            );
        });
        setSections(tempSections);
    }
    
    
    return(
    <>
        {sections}
    </>);
};

export default App;
