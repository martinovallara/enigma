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

        //console.log(`inputChar[${position}]=`, inputChar, `outputChars[${outputPosition}]=`, this.outputChars[outputPosition], `outputPosition:`, outputPosition);
        //console.log('rotor forward:', this.weight)
        console.log(' '.repeat(position) + '|');
        console.log(this.inputChars.join(''));
        console.log(this.outputChars.join(''));
        console.log(' '.repeat(outputPosition) + '|');
        return outputPosition;
    }


    backwardsTrasform(position: number): number {
        const inputChar = this.outputChars[position];
        const outputPosition =  this.inputChars.indexOf(inputChar);

        //console.log('rotor backwards:', this.weight)      
        //console.log(`outputChars[${position}]=`, inputChar, `inputChars[${outputPosition}]=`, this.inputChars[outputPosition], `outputPosition:`, outputPosition);
        

        console.log(' '.repeat(position) + '|');
        console.log(this.outputChars.join(''));
        console.log(this.inputChars.join(''));
        console.log(' '.repeat(outputPosition) + '|');

        return outputPosition;
    }

    rotate() {
        this.traformationCounter++;        
        if ((this.traformationCounter % (26 ** this.weight)) === 0) {
            this.moveRotor();
        }
    }

    private moveRotor() {
        //console.log('move rotor:', this.traformationCounter, this.weight);
        this.inputChars = [...this.inputChars.slice(1), this.inputChars[0]];
        this.outputChars = [...this.outputChars.slice(1), this.outputChars[0]];
    }
}
