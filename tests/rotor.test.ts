import Rotor from '@App/rotor.js'

const ascendingChars = [...Array(26).keys()].map((ascii) => String.fromCharCode(ascii + 65))
const descendingChars = [...Array(26).keys()].map((ascii) => String.fromCharCode(ascii + 65)).reverse()

describe('rotor', () => {
  describe('forwardTrasform', () => {
    it('should return a identity trasformation when chars map is in the same order', () => {
      const inputChars = ascendingChars
      const outputChars = ascendingChars

      const rotore = new Rotor(inputChars, outputChars)
      expect(rotore.forwardTrasform(1)).toBe(1)
    })

    it('should return output position of mathing inputChar', () => {
      const inputChars = ascendingChars
      const outputChars = descendingChars

      const rotore1 = new Rotor(inputChars, outputChars)
      expect(rotore1.forwardTrasform(0)).toBe(25)
    })

    describe('rotate', () => {
      it('should move mapping of one back position when apply the trasformation for second char and rotor is weigth 0', () => {
        const inputChars = ascendingChars
        const outputChars = descendingChars

        const rotore1 = new Rotor(inputChars, outputChars, 0)
        expect(rotore1.forwardTrasform(0)).toBe(25)
        rotore1.rotate()
        expect(rotore1.forwardTrasform(25)).toBe(24)
      })

      it('should move mapping of one back position when apply the trasformation for second char and rotor is weigth 1', () => {
        const inputChars = ascendingChars
        const outputChars = descendingChars

        const rotore1 = new Rotor(inputChars, outputChars, 1);
        [...Array(25).keys()].forEach(() => {
          expect(rotore1.forwardTrasform(0)).toBe(25)
          rotore1.rotate()
        })
        expect(rotore1.forwardTrasform(25)).toBe(24)
      })

      it('should move mapping of one back position when apply the trasformation for second char and rotor is weigth 2', () => {
        const inputChars = ascendingChars
        const outputChars = descendingChars

        const rotore1 = new Rotor(inputChars, outputChars, 2);
        [...Array((26 ** 2) - 1)].forEach(() => {
          expect(rotore1.forwardTrasform(0)).toBe(25)
          rotore1.rotate()
        })
        expect(rotore1.forwardTrasform(25)).toBe(24)
      })
    })
    describe('backwardsTrasform', () => {
      it('should trasformBack using outputChars position to map new position in inputChar', () => {
        const inputChars = ascendingChars
        const outputChars = descendingChars

        const rotore1 = new Rotor(inputChars, outputChars, 2)
        expect(rotore1.backwardsTrasform(25)).toBe(0)
      })
      it('should intial position when apply the trasofmration twice in the same rotor', () => {
        const inputChars = ascendingChars
        const outputChars = descendingChars

        const rotore1 = new Rotor(inputChars, outputChars)
        expect(rotore1.forwardTrasform(0)).toBe(25)

        expect(rotore1.backwardsTrasform(25)).toBe(0)
      })
    })
  })
})
