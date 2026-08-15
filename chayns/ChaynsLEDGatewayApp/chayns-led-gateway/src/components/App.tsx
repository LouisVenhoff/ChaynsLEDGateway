import { Accordion, AccordionContent, AccordionGroup, Button } from '@chayns-components/core';
import React, { useState, JSX, useEffect } from 'react';
import LightControl from './lightControl/LightControl';
import roomsConfig from '../config/rooms.config.json';
import { AppConfig } from '../types/config';

const config = roomsConfig as AppConfig;

const App = () => {

    const [sections, setSections] = useState<JSX.Element[]>();

    useEffect(() => {
        createSections();
    }, []);


    const createSections = () => {

        let tempSections: JSX.Element[] = [];

        config.rooms.forEach((room) => {
            tempSections.push(
                <Accordion key={room.id} title={room.name}>
                    <AccordionContent>
                        {room.devices.map((device) => (
                            <LightControl key={device.id} device={device} />
                        ))}
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
