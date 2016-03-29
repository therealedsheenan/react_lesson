import React from 'react'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import MainContainer from './MainContainer'

let Home = props => {
    return (
        <MainContainer>
            <h1>Github Battle</h1>
            <p className='lead'>What even is a jQuery?</p>
            <Link to='/playerOne'>
                <button type='button' className='btn btn-lg btn-success'>Get Started</button>
            </Link>
        </MainContainer>
    )
}

export default Home
