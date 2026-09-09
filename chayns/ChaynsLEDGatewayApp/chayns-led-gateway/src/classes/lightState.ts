import BrightnessOutOfRangeException from "errors/brightnessOutOfRange";
import usePublish from "hooks/usePublish";

export enum Animation {
    static,
    wave
}

export type LightStateDTO = {
    address: string,
    enabled: boolean,
    color: number[],
    animation: number,
    brightness: number,
}

class LightState{

    private address: string;
    private _enabled:boolean;
    private _color: number[];
    private _animation: Animation;
    private _brightness: number;

    private publish = usePublish();

    constructor(address: string, enabled: boolean, color: number[], animation: Animation, brightness: number){
        
        if(brightness < 0 || brightness > 100 ){
            throw new BrightnessOutOfRangeException(brightness);
        }
        
        this.address = address;
        this._enabled = enabled;
        this._color = color;
        this._animation = animation;
        this._brightness = brightness;
    }

    public static loadInitialized(address:string):LightState{
        return new LightState(address, false, [0, 0, 0], Animation.static, 10);
    }

    public set enabled(state: boolean){
        this._enabled = state;
        this.sendUpdate();
    }

    public set color(color: number[]){
        this._color = color;
        this.sendUpdate();
    }

    public set animation(animation: Animation){
        this._animation=animation;
        this.sendUpdate();
    }

    public set brightness(brightness: number){
        if(brightness < 0 || brightness > 100 ){
            throw new BrightnessOutOfRangeException(brightness);
        }

        this._brightness = brightness;
        this.sendUpdate();
    }

    private sendUpdate = () => {
        const dto:string = JSON.stringify(this.generateDTO());

        this.publish(dto);
    }

    private generateDTO():LightStateDTO{
        return {
            address: this.address,
            enabled: this._enabled,
            color: this._color,
            animation: this._animation,
            brightness: this._brightness
        }
    }
}

export default LightState;