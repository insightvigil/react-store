import {compose, createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'

// root - reducer -- THE BIG REDUCER


const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type) {
        return next(action);
    }

    console.log('type: ', action.type)
    console.log('payload: ', action.payload)
    console.log('currentState: ', store.getState())

    next(action);

    console.log('next state: ', store.getState())
}

//Step 2 We need a middleware to see the state changes at the start, in the middle and in the end the action touch the middleware before the reducer
const middleWare = [loggerMiddleware]
const composedEnhancers = compose(applyMiddleware(...middleWare));

//Step 1 create the store with the root reducer 
export const store = createStore(rootReducer,undefined, composedEnhancers)