import {compose, createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'

// root - reducer -- THE BIG REDUCER

//Step 2 We need a middleware to see the state changes at the start, in the middle and in the end the action touch the middleware before the reducer
const middleWare = [logger]
const composedEnhancers = compose(applyMiddleware(...middleWare));

//Step 1 create the store with the root reducer 
export const store = createStore(rootReducer,undefined, composedEnhancers)