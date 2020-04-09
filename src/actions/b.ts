const createTestFoobarAction = (payloadFoobar: number) => ({
  type: 'TESTFOOBAR',
  foobarPayload: payloadFoobar
} as const)

declare module 'yarta/reduxActions' {
  interface ReduxActions {
    TESTFOOBAR: ReturnType<typeof createTestFoobarAction> 
  }
}
