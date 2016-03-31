import { combineReducers } from 'redux'

import players from './players'
import initiateBattle from './initiateBattle'
import results from './results'

const reducers = combineReducers({
    players,
    initiateBattle,
    results
})

export default reducers
