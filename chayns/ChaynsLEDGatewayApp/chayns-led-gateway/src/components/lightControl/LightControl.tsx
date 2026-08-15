import { Accordion, AccordionContent, Button } from "@chayns-components/core";
import StaticLightApp from "components/staticLightApp/StaticLight";
import React, { useState } from "react";
import { Device } from "types/config";
import "./LightControl.css"

interface LightControlProps {
    device: Device;
}

const LightControl:React.FC<LightControlProps> = ({ device }) => {

    const [switchState, setSwitchState] = useState<boolean>(false);

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

                    <StaticLightApp />
                </div>
            </AccordionContent>
        </Accordion>
    );
}

export default LightControl;