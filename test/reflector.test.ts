import Reflector from '../src/reflector';

const ascendingChars = [...Array(26).keys()].map((ascii) => String.fromCharCode(ascii + 65));
const descendingChars = [...Array(26).keys()].map((ascii) => String.fromCharCode(ascii + 65)).reverse();

describe('reflector', () => {
    it('should return a identity trasformation when chars map is in the same order', () => {
        const inputChars = ascendingChars;
        const outputChars = ascendingChars;

        const rotore = new Reflector(inputChars, outputChars);
        expect(rotore.reflect(1)).toBe(1);
    })

    it('should return output position of mathing inputChar', () => {
        const inputChars = ascendingChars;
        const outputChars = descendingChars;

        const rotore1 = new Reflector(inputChars, outputChars);
        expect(rotore1.reflect(0)).toBe(25);
    })

    it('should return output position of mathing inputChar', () => {
        const reflector = new Reflector(['A', 'B', 'C', 'D', 'E'], ['C', 'E', 'A', 'B', 'D']);

        expect(reflector.reflect(0)).toBe(2);
    })
});