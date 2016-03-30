import React from 'react'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import Main from '../components/Main'
import Home from '../components/Home'

import PromptContainer from '../containers/PromptContainer'
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer'
import ResultsContainer from '../containers/ResultsContainer'

import store from '../reducers/'

const history = syncHistoryWithStore(hashHistory, store)

let routes = (
    <Provider store={ store }>
        <Router history={ history }>
            <Route path='/' component={ Main }>
                <IndexRoute component={ Home } />
                <Route path='playerOne' header='Player One' component={ PromptContainer } />
                <Route path='playerTwo/:playerOne' header='Player Two' component={ PromptContainer } />
                <Route path='battle' component={ ConfirmBattleContainer } />
                <Route path='results' component={ ResultsContainer } />
            </Route>
        </Router>
    </Provider>
);

export default routes
