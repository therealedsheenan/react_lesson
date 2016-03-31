import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import reducers from './reducers'
import routes from './config/router'

let store = createStore( reducers )

render (
    <Provider store={ store }>
        <Router history={ hashHistory } routes={ routes } />
    </Provider>, document.getElementById('app')
)
