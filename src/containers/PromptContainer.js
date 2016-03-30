import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import store from '../reducers'
import { AddPlayer } from '../actions'
import Prompt from '../components/Prompt'

// export default class PromptContainer extends React.Component {
//
//     constructor ( props, { dispatch } ) {
//         super( props )
//         this.state = { username: '' }
//     }
//
//     handleSubmitUser ( e ) {
//         e.preventDefault();
//         let username = this.state.username
//
//         this.setState({
//             username: ''
//         });
//
//         let dis = dispatch( AddPlayer( username ) )
//         console.log(dis)
//
//         if (this.props.routeParams.playerOne) {
//             this.context.router.push({
//                 pathname: '/battle',
//                 query: {
//                     playerOne: this.props.routeParams.playerOne,
//                     playerTwo: this.state.username,
//                 }
//             })
//         } else {
//             this.context.router.push('/playerTwo/' + this.state.username)
//         }
//     }
//
//     handleUpdateUser ( event ) {
//         this.setState({
//             username: event.target.value
//         });
//     }
//
//     render () {
//         return (
//             <Prompt
//                 onSubmitUser={ this.handleSubmitUser.bind( this ) }
//                 onUpdateUser={ this.handleUpdateUser.bind( this ) }
//                 header={ this.props.route.header }
//                 username={ this.state.username } />
//         )
//     }
// }
//
// PromptContainer.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }

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
                hashHistory.push('/battle')

                // ownProps.history.push({
                //     pathname: '/battle',
                //     query: {
                //         playerOne: ownProps.params.playerOne,
                //         playerTwo: getPlayer( store.getState() ).player[1].name,
                //     }
                // })
            } else {
                hashHistory.push('/playerTwo/' + getPlayer( store.getState() ).player[0].name )
            }
            // dispatch( AddPlayer(  ) )
            // e.preventDefault();
            // let username = this.state.username
            //
            // this.setState({
            //     username: ''
            // });
            //
            // dispatch( AddPlayer( username ) )
            //

            // if (ownProps.routeParams.playerOne) {
            //     this.context.router.push({
            //         pathname: '/battle',
            //         query: {
            //             playerOne: this.props.routeParams.playerOne,
            //             playerTwo: this.state.username,
            //         }
            //     })
            // } else {
            //     this.context.router.push('/playerTwo/' + this.state.username)
            // }
        }
    }
}

const PromptContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( Prompt )

export default PromptContainer
