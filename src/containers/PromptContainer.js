import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import store from '../reducers'
import { AddPlayer } from '../actions'
import Prompt from '../components/Prompt'

const mapStateToProps = ( state, ownProps ) => {
    return {
        header: ownProps.route.header,
        username: state.players.player ? state.players.player[0].name : ''
    }
}

const getPlayer = ( state ) => {
    return state.players
}

const mapDispatchToProps = ( dispatch, ownProps ) => {
    return {
        onUpdateUser: ( event ) => {
            dispatch( AddPlayer( event.target.value ) )
        },

        onSubmitUser: ( e ) => {
            console.log(ownProps)
            if( ownProps.params.playerOne )  {

                hashHistory.push({
                    pathname: '/battle',
                    query: {
                        playerOne: ownProps.params.playerOne,
                        playerTwo: getPlayer( store.getState() ).player[0].name,
                    }
                })
            } else {
                hashHistory.push('/playerTwo/' + getPlayer( store.getState() ).player[0].name )
            }
        }
    }
}

const PromptContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( Prompt )

export default PromptContainer
