import { JSX } from "react";

export interface Device {
    id: string;
    name: string;
}

export interface Room {
    id: string;
    name: string;
    devices: Device[];
}

export interface LightApp {
    name: string,
    appId: string;
}

export interface AppConfig {
    rooms: Room[];
    lightApps: LightApp[];
}
