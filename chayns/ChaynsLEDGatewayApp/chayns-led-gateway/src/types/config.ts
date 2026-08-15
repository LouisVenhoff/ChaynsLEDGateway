export interface Device {
    id: string;
    name: string;
}

export interface Room {
    id: string;
    name: string;
    devices: Device[];
}

export interface AppConfig {
    rooms: Room[];
}
