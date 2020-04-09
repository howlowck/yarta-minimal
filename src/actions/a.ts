import { TestPayload } from '~/types/payloads'

const createTestAction = (payload: TestPayload) => ({
  type: 'TEST',
  fooPayload: payload
} as const)

const createTest2Action = (payloadNum: number) => ({
  type: 'TEST2',
  barPayload: payloadNum
} as const)

declare module 'yarta/reduxActions' {
  interface ReduxActions {
    TEST: ReturnType<typeof createTestAction>,
    TEST2: ReturnType<typeof createTest2Action>
  }  
}
