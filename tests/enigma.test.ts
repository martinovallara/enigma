import Reflector from '@App/reflector.js'
import Rotor from '@App/rotor.js'
import Enigma from '@App/enigma.js'
import InvolutiveMapping from '@App/involutive-mapping.js'
import factoryEnigma, { randomicChars } from '@App/factory-enigma.js'

describe('enigma', () => {
  it('encode should call in sequence forwardTrasform of rotor1, rotor2, rotor3, reflector passing the as input the ouptup', () => {
    const rotor1 = new Rotor(['A', 'B', 'C'], ['C', 'B', 'A'])
    const rotor2 = new Rotor(['A', 'B', 'C'], ['C', 'B', 'A'])
    const rotor3 = new Rotor(['A', 'B', 'C'], ['C', 'B', 'A'])
    const reflector = new Reflector(['A', 'B', 'C'], ['C', 'B', 'A'])
    const enigma = new Enigma(rotor1, rotor2, rotor3, reflector)

    const spyRotor1Forward = jest.spyOn(rotor1, 'forwardTrasform').mockImplementation(() => 0)
    const spyRotor2Foward = jest.spyOn(rotor2, 'forwardTrasform').mockImplementation(() => 1)
    const spyRotor3Forward = jest.spyOn(rotor3, 'forwardTrasform').mockImplementation(() => 3)
    const spyReflectorFoward = jest.spyOn(reflector, 'reflect').mockImplementation(() => 4)

    const spyRotor1Back = jest.spyOn(rotor1, 'backwardsTrasform').mockImplementation(() => 0)
    const spyRotor2Back = jest.spyOn(rotor2, 'backwardsTrasform').mockImplementation(() => 1)
    const spyRotor3Back = jest.spyOn(rotor3, 'backwardsTrasform').mockImplementation(() => 3)

    enigma.encode('A')
    expect(spyRotor1Forward).toHaveBeenCalledWith(0)
    expect(spyRotor2Foward).toHaveBeenCalledWith(0)
    expect(spyRotor3Forward).toHaveBeenCalledWith(1)
    expect(spyReflectorFoward).toHaveBeenCalledWith(3)

    expect(spyRotor3Back).toHaveBeenCalledWith(4)
    expect(spyRotor2Back).toHaveBeenCalledWith(3)
    expect(spyRotor1Back).toHaveBeenCalledWith(1)
  })

  it('should return the encoded word', () => {
    const outputChars = randomicChars()

    const encodeEnigma = factoryEnigma(outputChars)
    const encoded = encodeEnigma.encode('CIAO')

    const decodeEnigma = factoryEnigma(outputChars)
    const dencoded = decodeEnigma.encode(encoded)
    expect(dencoded).toBe('CIAO')
  })

  describe('Involutive Mapping', () => {
    it('should return a involutive mapping', () => {
      const mappingGenerator = new InvolutiveMapping()
      const outputChars = mappingGenerator.getValues()
      const listChars = mappingGenerator.getKeys()

      const check = listChars.map((char, index) => {
        const outChar = outputChars[index]

        const outCharPositionInOrderList = listChars.indexOf(outChar)
        const charsOutCharInPosition = outputChars[outCharPositionInOrderList]

        const check = charsOutCharInPosition === char && outChar !== char
        return check
      })

      expect(check.every((value) => value)).toBe(true)
    })
  })
})
