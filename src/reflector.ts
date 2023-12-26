export default class Reflector {
    inputChars: readonly string[];
    outputChars: readonly string[];
    constructor(inputChars: ReadonlyArray<string>, outputChars: ReadonlyArray<string>) {
        this.inputChars = inputChars;
        this.outputChars = outputChars;
    }
    trasform(position: number): number {
        const inputChar = this.inputChars[position];
        const outputPosition = this.outputChars.indexOf(inputChar);
        return outputPosition;
    }
}