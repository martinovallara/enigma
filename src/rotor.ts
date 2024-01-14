import logger from "@App/event-occurred.js";

export default class Rotor {
    private inputChars: readonly string[];
    private outputChars: readonly string[];
    private weight: number;
    private traformationCounter: number = 1;

    constructor(inputChars: ReadonlyArray<string>, outputChars: ReadonlyArray<string>, weight: number = 0) {
        this.inputChars = inputChars;
        this.outputChars = outputChars;
        this.weight = weight;
    }
    forwardTrasform(position: number): number {
        const inputChar = this.inputChars[position];
        const outputPosition = this.outputChars.indexOf(inputChar);

        logger.forwardTransformationOccurred(this.inputChars, this.outputChars, position, outputPosition);
        return outputPosition;
    }

    
    backwardsTrasform(position: number): number {
        const inputChar = this.outputChars[position];
        const outputPosition = this.inputChars.indexOf(inputChar);

        logger.backTransformationOccurred(this.inputChars, this.outputChars, position, outputPosition)

        return outputPosition;
    }

    rotate() {
        this.traformationCounter++;
        if ((this.traformationCounter % (26 ** this.weight)) === 0) {
            this.moveRotor();
        }
    }

    private moveRotor() {
        this.inputChars = [...this.inputChars.slice(1), this.inputChars[0]];
        this.outputChars = [...this.outputChars.slice(1), this.outputChars[0]];
    }
}

