import logger from "@App/event-occurred.js";

export default class Reflector {

    inputChars: readonly string[];
    outputChars: readonly string[];
    constructor(inputChars: ReadonlyArray<string>, outputChars: ReadonlyArray<string>) {
        this.inputChars = inputChars;
        this.outputChars = outputChars;
    }
    reflect(position: number): number {
        const inputChar = this.inputChars[position];
        const outputPosition = this.outputChars.indexOf(inputChar);

        const inputChars = this.inputChars;
        const outputChars = this.outputChars;

        logger.reflectionOccurred(position, inputChars, outputChars, outputPosition);

        return outputPosition;
    }
}

