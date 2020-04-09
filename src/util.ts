import {AnyAction} from 'redux'

export type ValueOf<T> = T extends { [key in keyof T]: infer U ; } ? U : never
type IsActionFunc<R extends { [key in keyof R]: AnyAction }> = <T extends keyof R>(action: AnyAction, actionType: T) => action is R[T]
// const isAction = <T extends keyof ReduxActions>(action: ValueOf<ReduxActions>, actionType: T): action is ReduxActions[T] => action.type === actionType
// const makeIsActionFunction:
//   <T extends { [key in keyof T]: AnyAction }>() => IsActionFunc<T>
//   =
//   <R extends { [key in keyof R]: AnyAction }>() =>
//   (action, actionType: any): action is R[typeof actionType] => action.type === actionType

// const isAction: IsActionFunc<ReduxActions> = (action, actionType): action is ReduxActions[typeof actionType] => action.type === actionType

// // export const isAction = makeIsActionFunction<ReduxActions>()

// const makeIsActionFunction: <TReduxActions extends { [key in keyof TReduxActions]: AnyAction; }>() => IsActionFunc<TReduxActions> 
//   = 
//   <TRA extends { [key in keyof TRA]: AnyAction }>() => (action, actionType: any): action is TRA[typeof actionType] => action.type === actionType
