import { HueSlider } from "@chayns-components/color-picker";
import React, { useEffect, useState } from "react";
import "./staticLight.css";
import { Accordion, AccordionContent, Slider } from "@chayns-components/core";
import { AppControl } from "interfaces/appControl";
import { SliderInterval } from "@chayns-components/core/lib/types/components/slider/Slider";

interface StaticLightAppInterface extends AppControl{};

const StaticLightApp:React.FC<StaticLightAppInterface> = ({onColorChange, onBrightnessChange}) => {
    
    const [color, setColor] = useState<number[]>([0, 0, 0]);
    const [brightness, setBrightness] = useState<number>(0);
    
    useEffect(() => {
        onBrightnessChange(brightness);
    }, [brightness]);

    useEffect(() => {
        onColorChange(color);
    }, [color]);


    const parseRgb = (rawColor: React.CSSProperties["color"]): [number, number, number] => {
        const parts = rawColor?.match(/\d+(\.\d+)?/g);

        if (!parts || parts.length < 3) {
            return [0, 0, 0];
        }

        return [Number(parts[0]), Number(parts[1]), Number(parts[2])];
    };

    const updateColor = (rawColor: React.CSSProperties["color"]) => {
        setColor(parseRgb(rawColor));
    };


    return(
    <div className="static-light--main">
        <Accordion isOpened isFixed key={"color"} title={"Farbe"}>
            <AccordionContent>
                <HueSlider onChange={updateColor}/>
            </AccordionContent>
        </Accordion>

        <Accordion isOpened isFixed key={"brightness"} title={"Helligkeit"}>
            <AccordionContent>
                <Slider minValue={0} maxValue={100} onChange={(value?: number, _?:SliderInterval) => {setBrightness(value || 0)}} />
            </AccordionContent>
        </Accordion>
    </div>);
}

export default StaticLightApp;