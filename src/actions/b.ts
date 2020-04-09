const createTestFoobarAction = (payloadFoobar: number) => ({
  type: 'TESTFOOBAR',
  foobarPayload: payloadFoobar
} as const)

interface ReduxActions {
  TESTFOOBAR: ReturnType<typeof createTestFoobarAction> 
}
