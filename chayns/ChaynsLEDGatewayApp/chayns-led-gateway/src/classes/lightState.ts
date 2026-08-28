export enum Animation {
    static,
    wave
}

class LightState{

    private address: string;
    private _enabled:boolean;
    private _color: string;
    private _animation: Animation;
    private _brightness: string;

    constructor(address: string, enabled: boolean, color: string, animation: Animation, brightness: string){
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
        if(brightness)
    }


}

export default LightState;