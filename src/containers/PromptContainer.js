import React from 'react'
import { connect } from 'react-redux';
import { AddPlayer } from '../actions'
import { bindActionCreators } from 'redux';

import Prompt from '../components/Prompt'

export default class PromptContainer extends React.Component {

    constructor ( props ) {
        super( props )
    }

    handleSubmitUser ( e ) {
        e.preventDefault();

        if (this.props.routeParams.playerOne) {
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.props.username,
                }
            })
        } else {
            this.context.router.push('/playerTwo/' + this.props.username)
        }
    }

    render () {
        return (
            <Prompt
                onSubmitUser={ this.handleSubmitUser.bind( this ) }
                header={ this.props.route.header }
                username={ this.props.username }
                onUpdateUser={ this.props.onUpdateUser }
                />
        )
    }
}

PromptContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

const mapStateToProps = ( state, ownProps ) => {
    return {
        header: ownProps.route.header,
        username: state.players.player ? state.players.player[0].name : ''
    }
}

const mapDispatchToProps = ( dispatch, ownProps ) => {
    return {
        onUpdateUser: ( event ) => {
            dispatch( AddPlayer( event.target.value ) )
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)( PromptContainer )
