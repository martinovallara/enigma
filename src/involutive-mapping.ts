export default class InvolutiveMapping {
    private mapping: Map<string, string> = new Map();

    constructor() {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('').sort(() => Math.random() - 0.5);

        // Crea una mappatura involutiva
        for (let i = 0; i < alphabet.length; i++) {
            const char = alphabet[i];
            const inverseChar = alphabet[(i + 13) % 26]; // Utilizziamo 13 come valore fisso per l'esempio

            this.mapping.set(char, inverseChar);
            this.mapping.set(inverseChar, char);
        }
    }

    // Funzione per ottenere il valore mappato
    getValue(char: string): string | undefined {
        return this.mapping.get(char);
    }

    getKeys() {
        return [...this.mapping.keys()];
    }
    getValues(): string[] {
        return [...this.mapping.values()];
    }

    getMap() {
        return this.mapping;
    }
}