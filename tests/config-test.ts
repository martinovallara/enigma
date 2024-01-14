jest.mock('@App/event-occurred.js', () => {
  return {
    forwardTransformationOccurred: jest.fn(),
    backTransformationOccurred: jest.fn(),
    reflectionOccurred: jest.fn()
  }
})
