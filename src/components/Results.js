import React from 'react'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'
import MainContainer from './MainContainer'
import Loading from './Loading'

let PropTypes = React.PropTypes

let StartOver = () => {
    return (
        <div className='col-sm-12'>
            <Link to='/playerOne'>
                <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
            </Link>
        </div>
    )
}

let Tie = props => {
    return (
        <MainContainer>
            <h1>It's a Tie!</h1>
            <StartOver />
        </MainContainer>
    )
}

let Results = props => {
    if (props.isLoading === true) {
        return <Loading />
    }

    if (props.scores[0] === props.scores[1]) {
        return (
            <Tie scores={props.scores} playersInfo={props.playersInfo}/>
        )
    }

    let winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    let losingIndex = winningIndex === 0 ? 1 : 0;

    return (
        <MainContainer>
            <h1>Results</h1>
            <div className='col-sm-8 col-sm-offset-2'>
                <UserDetailsWrapper header='Winner'>
                    <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header='Loser'>
                    <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
                </UserDetailsWrapper>
            </div>
            <StartOver />
        </MainContainer>
    )
}

Results.propTypes = {
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
}

export default Results
