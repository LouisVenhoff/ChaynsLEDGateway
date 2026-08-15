import { Button, ContentCard } from "@chayns-components/core";
import React, { useState } from "react";

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
            <Button isSecondary={!switchState} onClick={toggleSwitchState}>
                {loadButtonText()}
            </Button>
        </ContentCard>
    );
}

export default LightControl;