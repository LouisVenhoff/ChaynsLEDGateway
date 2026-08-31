class BrightnessOutOfRangeException extends Error {

    public readonly value: number;

    constructor(value: number) {
        super(`Brightness value ${value} is out of range. Expected a value between 0 and 100.`);
        this.name = "BrightnessOutOfRangeException";
        this.value = value;
    }

}

export default BrightnessOutOfRangeException;
