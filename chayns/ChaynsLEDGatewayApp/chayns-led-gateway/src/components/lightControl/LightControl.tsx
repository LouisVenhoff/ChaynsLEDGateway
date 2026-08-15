import { Button, ContentCard } from "@chayns-components/core";
import StaticLightApp from "components/staticLightApp/StaticLight";
import React, { useState } from "react";
import "./LightControl.css"

const LightControl:React.FC = () => {
    
    const [switchState, setSwitchState] = useState<boolean>(false);
    
    const toggleSwitchState = () => {
        setSwitchState(!switchState);
    }

    const loadButtonText = () => {
        return switchState ? "Lich ausschalten" : "Licht einschalten";
    }
    
    
    return(
        <ContentCard>
            <div className="light-control--main">
                <Button isSecondary={!switchState} onClick={toggleSwitchState}>
                    {loadButtonText()}
                </Button>

                <StaticLightApp />
            </div>
        </ContentCard>
    );
}

export default LightControl;