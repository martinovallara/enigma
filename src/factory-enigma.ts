import Enigma from "@App/enigma.js";
import InvolutiveMapping from "@App/involutive-mapping.js";
import Reflector from "@App/reflector.js";
import Rotor from "@App/rotor.js";

export default function factoryEnigma(outputChars: string[]) {
    const inputChars = [...orderChars()];

    const involutiveMapping = new InvolutiveMapping();
    const reflectorInputChars =  involutiveMapping.getKeys();
    const reflectorOutputChars = involutiveMapping.getValues(); 

    const rotor1 = new Rotor(inputChars, outputChars, 0);
    const rotor2 = new Rotor(inputChars, outputChars, 1);
    const rotor3 = new Rotor(inputChars, outputChars, 2);
    const reflector = new Reflector(reflectorInputChars, reflectorOutputChars);
    const enigma = new Enigma(rotor1, rotor2, rotor3, reflector);
    return enigma;
}

export const orderChars = () => [...Array(26).keys()].map((ascii) => String.fromCharCode(ascii + 65));
export const randomicChars = () => [...orderChars()].sort(() => Math.random() - 0.5);