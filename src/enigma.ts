import Reflector from "./reflector.js";
import Rotor from "./rotor.js";


export default class Enigma {

    rotor1: Rotor;
    rotor2: Rotor;
    rotor3: Rotor;
    reflector: Reflector;
    constructor(rotor1: Rotor, rotor2: Rotor, rotor3: Rotor, reflector: Reflector) {
        this.rotor1 = rotor1;
        this.rotor2 = rotor2;
        this.rotor3 = rotor3;
        this.reflector = reflector;
    }

    encode(input: string) {
        const inputChars = input.toUpperCase().split('');
        const outputChars = inputChars.map((char) => this.encodeChar(char));
        return outputChars.join('');
    }
    private encodeChar(input: string) {
        console.log('input:', input);
        const inputPosition = this.charToPosition(input);

        const rotor1Position = this.rotor1.forwardTrasform(inputPosition);
        const rotor2Position = this.rotor2.forwardTrasform(rotor1Position);
        const rotor3Position = this.rotor3.forwardTrasform(rotor2Position);
        const reflectorPosition1 = this.reflector.reflect(rotor3Position);
        //const reflectorPosition2 = this.reflector.backwardsTrasform(reflectorPosition1);
        const rotor3Position2 = this.rotor3.backwardsTrasform(reflectorPosition1);
        const rotor2Position2 = this.rotor2.backwardsTrasform(rotor3Position2);
        const rotor1Position2 = this.rotor1.backwardsTrasform(rotor2Position2);

        this.rotor1.rotate();
        this.rotor2.rotate();
        this.rotor3.rotate();

        return this.positionToChar(rotor1Position2);
    }

    positionToChar(outputPosition: number) {
        return String.fromCharCode(outputPosition + 65);
    }
    charToPosition(input: string) {
        return input.charCodeAt(0) - 65;
    }
}