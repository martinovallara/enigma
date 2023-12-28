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


        // console.log(`inputChar[${position}]=`, inputChar, `outputChars[${outputPosition}]=`, this.outputChars[outputPosition], `outputPosition:`, outputPosition);

        console.log('-'.repeat(26))
        console.log('Reflector forward:')
        console.log(' '.repeat(position) + '|');
        console.log(this.inputChars.join(''));
        console.log(this.outputChars.join(''));
        console.log(' '.repeat(outputPosition) + '|');

        return outputPosition;
    }

}