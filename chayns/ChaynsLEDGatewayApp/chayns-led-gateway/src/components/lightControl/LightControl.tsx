import { Accordion, AccordionContent, Button, ComboBox } from "@chayns-components/core";
import StaticLightApp from "components/staticLightApp/StaticLight";
import React, { JSX, useEffect, useState } from "react";
import { Device, LightApp } from "types/config";
import "./LightControl.css"
import appConfig from "../../config/app.config.json";
import { AppConfig } from "types/config";
import { IComboBoxItems, IComboBoxItem } from "@chayns-components/core/lib/types/components/combobox/ComboBox.types";
import PlaceholderApp from "components/placeholderApp/PlaceholderApp";
import LightState from "classes/lightState";

const config = appConfig as AppConfig;

interface LightControlProps {
    device: Device;
}

const LightControl:React.FC<LightControlProps> = ({ device }) => {

    const defaultSelection:IComboBoxItem = {text: config.lightApps[0].name, value: config.lightApps[0].appId}
    const [switchState, setSwitchState] = useState<boolean>(false);
    const [selectedApp, setSelectedApp] = useState<JSX.Element | null>();

    const [selectedComboboxItem,  setSelectedComboboxItem] = useState<IComboBoxItem>(defaultSelection);

    let lampState:LightState = LightState.loadInitialized(device.id);

    useEffect(() => {
        if(switchState){
            setSelectedApp(<StaticLightApp />);
            lampState.enabled = true;
        }
        else{
            setSelectedApp(null);
            lampState.enabled = false;
        }
    }, [switchState]);

    const toggleSwitchState = () => {
        setSwitchState(!switchState);
    }

    const loadButtonText = () => {
        return switchState ? "Lich ausschalten" : "Licht einschalten";
    }

    const generateComboboxSelection = ():IComboBoxItems[] => {
        
        const listsArr:{text: string, value: string}[] = [];
        const configurationData:LightApp[] = config.lightApps;

        configurationData.forEach((app: LightApp) => {
            listsArr.push({text: app.name, value: app.appId});
        });
        
        return[{list: listsArr}]
    }

    const onComboboxChange = (data:any) => {
        const selectedApp:LightApp | undefined = config.lightApps.find(({name, appId}) => {
            return appId == data.value;
        });

        if(!selectedApp) return;

        setSelectedComboboxItem({text: selectedApp.name, value: selectedApp.appId});

        updateLightApp(selectedApp.appId);
    }

    const updateLightApp = (appId: string) => {
        const app:JSX.Element = getLightAppFromAppId(appId);

        setSelectedApp(app);
    }

    const getLightAppFromAppId = (appId: string):JSX.Element => {
        switch(appId){
            case "staticLight":
                return <StaticLightApp onBrightnessChange={(brightness: number) => {console.log(`Bright: ${brightness}`)}} onColorChange={() => {}} />
            default:
                return <PlaceholderApp />
        }
    }

    return(
        <Accordion title={device.name}>
            <AccordionContent>
                <div className="light-control--main">
                    <div className="light-control--selectors">
                        <Button isSecondary={!switchState} onClick={toggleSwitchState}>
                            {loadButtonText()}
                        </Button>

                        {selectedApp !== null ? <ComboBox onSelect={onComboboxChange} selectedItem={selectedComboboxItem} placeholder="Auswählen" lists={generateComboboxSelection()} /> : null}
                    </div>

                    {selectedApp}
                </div>
            </AccordionContent>
        </Accordion>
    );
}

export default LightControl;