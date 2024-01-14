const EventOccurred = {
  forwardTransformationOccurred: (
    inputChars: readonly string[],
    outputChars: readonly string[],
    position: number,
    outputPosition: number
  ): void => {
    const arrowDown = '↓'
    console.log(' '.repeat(position) + arrowDown)
    console.log(inputChars.join(''))
    console.log(outputChars.join(''))
    console.log(' '.repeat(outputPosition) + arrowDown)
  },

  backTransformationOccurred: (
    inputChars: readonly string[],
    outputChars: readonly string[],
    position: number,
    outputPosition: number
  ): void => {
    const arrowUp = '↑'
    console.log(' '.repeat(position) + arrowUp)
    console.log(outputChars.join(''))
    console.log(inputChars.join(''))
    console.log(' '.repeat(outputPosition) + arrowUp)
  },

  reflectionOccurred: (
    position: number,
    inputChars: readonly string[],
    outputChars: readonly string[],
    outputPosition: number
  ): void => {
    console.log('-'.repeat(26))
    console.log('Reflector forward:')
    console.log(' '.repeat(position) + '|')
    console.log(inputChars.join(''))
    console.log(outputChars.join(''))
    console.log(' '.repeat(outputPosition) + '|')
  }
}

export default EventOccurred
