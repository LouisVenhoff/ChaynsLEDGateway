import { Accordion, AccordionContent, Button } from "@chayns-components/core";
import StaticLightApp from "components/staticLightApp/StaticLight";
import React, { useEffect, useState } from "react";
import { Device } from "types/config";
import "./LightControl.css"

interface LightControlProps {
    device: Device;
}

const LightControl:React.FC<LightControlProps> = ({ device }) => {

    const [switchState, setSwitchState] = useState<boolean>(false);
    const [selectedApp, setSelectedApp] = useState<JSX.Element | null>();


    useEffect(() => {
        if(switchState){
            setSelectedApp(<StaticLightApp />);
        }
        else{
            setSelectedApp(null);
        }
    }, [switchState]);

    const toggleSwitchState = () => {
        setSwitchState(!switchState);
    }

    const loadButtonText = () => {
        return switchState ? "Lich ausschalten" : "Licht einschalten";
    }


    return(
        <Accordion title={device.name}>
            <AccordionContent>
                <div className="light-control--main">
                    <Button isSecondary={!switchState} onClick={toggleSwitchState}>
                        {loadButtonText()}
                    </Button>

                    {selectedApp}
                </div>
            </AccordionContent>
        </Accordion>
    );
}

export default LightControl;