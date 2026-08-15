import { HueSlider } from "@chayns-components/color-picker";
import React from "react";
import "./staticLight.css";
import { Accordion, AccordionContent, Slider } from "@chayns-components/core";


const StaticLightApp:React.FC = () => {
    return(
    <div className="static-light--main">
        <Accordion isOpened isFixed key={"color"} title={"Farbe"}>
            <AccordionContent>
                <HueSlider />
            </AccordionContent>
        </Accordion>

        <Accordion isOpened isFixed key={"brightness"} title={"Helligkeit"}>
            <AccordionContent>
                <Slider minValue={0} maxValue={100} />
            </AccordionContent>
        </Accordion>
    </div>);
}

export default StaticLightApp;