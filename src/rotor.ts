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
    trasform(position: number): number {

        const charInput = this.inputChars[position];
        const resultPosition = this.outputChars.indexOf(charInput);

        this.traformationCounter++;        
        if ((this.traformationCounter % (26 ** this.weight)) === 0) {
            this.moveRotor();
        }

        return resultPosition;
    }

    private moveRotor() {
        //console.log('move rotor:', this.traformationCounter, this.weight);
        this.inputChars = [...this.inputChars.slice(1), this.inputChars[0]];
        this.outputChars = [...this.outputChars.slice(1), this.outputChars[0]];
    }
}
