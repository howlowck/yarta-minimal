import { ValueOf } from '~/util'
const reducer = (prev: any, action: ValueOf<ReduxActions>) => {
  if (action.type === 'TEST') {
    return prev
  }
  // Bill, hover over `action.type` above to see all the available types.
  return prev
}
