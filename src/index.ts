import factoryEnigma, { randomicChars } from "@App/factory-enigma.js";

const outputChars = randomicChars();
const encodeEnigma = factoryEnigma(outputChars);
console.log('='.repeat(26))

const encoded = encodeEnigma.encode('COMPLIMENTIPERILTRENTA');

console.log('encoded:', encoded);
console.log('='.repeat(26))

console.log('X'.repeat(26))
const decodeEnigma = factoryEnigma(outputChars);
const dencoded = decodeEnigma.encode(encoded);

console.log('dencoded:', dencoded);
console.log('X'.repeat(26))


