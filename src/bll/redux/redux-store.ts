import {combineReducers, createStore} from "redux";

export type stateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
})

export const store = createStore(rootReducer)
