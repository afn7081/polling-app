import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'

import rootReducer  from './reducers';

const DEFAULT_STATE={
    auth: {isAuthenticated: false,user:{}},
    error:{message: null},
    polls:[],
    currentPoll:{}

    
}

export const store=createStore(
    rootReducer,
    DEFAULT_STATE,
    compose(
        applyMiddleware(thunk)
        )
);