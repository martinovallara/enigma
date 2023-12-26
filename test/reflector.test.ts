import Reflector from '../src/reflector';

const ascendingChars = [...Array(26).keys()].map((ascii) => String.fromCharCode(ascii + 65));
const descendingChars = [...Array(26).keys()].map((ascii) => String.fromCharCode(ascii + 65)).reverse();

describe('reflector', () => {
    it('should return a identity trasformation when chars map is in the same order', () => {
        const inputChars = ascendingChars;
        const outputChars = ascendingChars;

        const rotore = new Reflector(inputChars, outputChars);
        expect(rotore.trasform(1)).toBe(1);
    })

    it('should return output position of mathing inputChar', () => {
        const inputChars = ascendingChars;
        const outputChars = descendingChars;

        const rotore1 = new Reflector(inputChars, outputChars);
        expect(rotore1.trasform(0)).toBe(25);
    })

    it('should intial position when apply the trasofmration twice in the same rotor', () => {
        const inputChars = ascendingChars;
        const outputChars = descendingChars;

        const rotore1 = new Reflector(inputChars, outputChars);
        expect(rotore1.trasform(0)).toBe(25);
        const rotore2 = new Reflector(inputChars, outputChars);
        expect(rotore2.trasform(25)).toBe(0);
    })

    it('should not move mapping of one back position when apply the trasformation for second char', () => {
        const inputChars = ascendingChars;
        const outputChars = descendingChars;

        const rotore1 = new Reflector(inputChars, outputChars);
        expect(rotore1.trasform(0)).toBe(25);
        expect(rotore1.trasform(0)).toBe(25);
    })
});