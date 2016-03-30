import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import players from './players'
import initiateBattle from './initiateBattle'
import results from './results'

const store = createStore (
    combineReducers({
        players,
        initiateBattle,
        results,
        routing: routerReducer
    })
)

export default store
