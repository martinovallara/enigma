import Rotor from '../src/rotor';

const ascendingChars = [...Array(26).keys()].map((ascii) => String.fromCharCode(ascii + 65));
const descendingChars = [...Array(26).keys()].map((ascii) => String.fromCharCode(ascii + 65)).reverse();

describe('rotor', () => {
    describe('setup', () => {
        it('should return a identity trasformation when chars map is in the same order', () => {
            const inputChars = ascendingChars;
            const outputChars = ascendingChars;

            const rotore = new Rotor(inputChars, outputChars);
            expect(rotore.trasform(1)).toBe(1);
        })

        it('should return output position of mathing inputChar', () => {
            const inputChars = ascendingChars;
            const outputChars = descendingChars;

            const rotore1 = new Rotor(inputChars, outputChars);
            expect(rotore1.trasform(0)).toBe(25);
        })

        it('should intial position when apply the trasofmration twice in the same rotor', () => {
            const inputChars = ascendingChars;
            const outputChars = descendingChars;

            const rotore1 = new Rotor(inputChars, outputChars);
            expect(rotore1.trasform(0)).toBe(25);
            const rotore2 = new Rotor(inputChars, outputChars);
            expect(rotore2.trasform(25)).toBe(0);
        })

        it('should move mapping of one back position when apply the trasformation for second char and rotor is weigth 0', () => {
            const inputChars = ascendingChars;
            const outputChars = descendingChars;

            const rotore1 = new Rotor(inputChars, outputChars, 0);
            expect(rotore1.trasform(0)).toBe(25);
            expect(rotore1.trasform(25)).toBe(24);
        })

        it('should move mapping of one back position when apply the trasformation for second char and rotor is weigth 1', () => {
            const inputChars = ascendingChars;
            const outputChars = descendingChars;

            const rotore1 = new Rotor(inputChars, outputChars, 1);
            [...Array(25).keys()].forEach(() => expect (rotore1.trasform(0)).toBe(25));
            expect(rotore1.trasform(25)).toBe(24);
        })

        it('should move mapping of one back position when apply the trasformation for second char and rotor is weigth 2', () => {
            const inputChars = ascendingChars;
            const outputChars = descendingChars;

            const rotore1 = new Rotor(inputChars, outputChars, 2);
            [...Array((26 ** 2)-1)].forEach(() => expect (rotore1.trasform(0)).toBe(25));
            expect(rotore1.trasform(25)).toBe(24);
        })
    })

})