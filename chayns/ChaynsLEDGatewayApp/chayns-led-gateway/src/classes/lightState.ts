import BrightnessOutOfRangeException from "errors/brightnessOutOfRange";

export enum Animation {
    static,
    wave
}

type LightStateDTO = {
    address: string,
    enabled: boolean,
    color: string,
    animation: number,
    brightness: number,
}

class LightState{

    private address: string;
    private _enabled:boolean;
    private _color: string;
    private _animation: Animation;
    private _brightness: number;

    constructor(address: string, enabled: boolean, color: string, animation: Animation, brightness: number){
        
        if(brightness < 0 || brightness > 100 ){
            throw new BrightnessOutOfRangeException(brightness);
        }
        
        this.address = address;
        this._enabled = enabled;
        this._color = color;
        this._animation = animation;
        this._brightness = brightness;
    }

    public set enabled(state: boolean){
        this.enabled = state;
    }

    public set color(color: string){
        this.color = color;
    }

    public set animation(animation: Animation){
        this._animation=animation;
    }

    public set brightness(brightness: number){
        if(brightness < 0 || brightness > 100 ){
            throw new BrightnessOutOfRangeException(brightness);
        }

        this._brightness = brightness;
    }

    private sendUpdate = () => {
        const dto:string = JSON.stringify(this.generateDTO());

        console.log(`Publishing: ${dto}`);
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