<<<<<<< HEAD
import { combineReducers } from 'redux'
=======
import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
>>>>>>> master

import players from './players'
import initiateBattle from './initiateBattle'
import results from './results'

<<<<<<< HEAD
const reducers = combineReducers({
    players,
    initiateBattle,
    results
})

export default reducers
=======
const store = createStore (
    combineReducers({
        players,
        initiateBattle,
        results,
        routing: routerReducer
    })
)

export default store
>>>>>>> master
