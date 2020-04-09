const createTestAction = (payload: string) => ({
  type: 'TEST',
  fooPayload: payload
} as const)

const createTest2Action = (payloadNum: number) => ({
  type: 'TEST2',
  barPayload: payloadNum
} as const)

interface ReduxActions {
  TEST: ReturnType<typeof createTestAction>,
  TEST2: ReturnType<typeof createTest2Action>
}
