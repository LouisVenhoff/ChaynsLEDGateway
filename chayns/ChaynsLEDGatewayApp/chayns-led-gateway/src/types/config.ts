export type DeviceType = 'static';

export interface Device {
    id: string;
    name: string;
    type: DeviceType;
}

export interface Room {
    id: string;
    name: string;
    devices: Device[];
}

export interface AppConfig {
    rooms: Room[];
}
