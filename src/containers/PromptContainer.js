import React from 'react'
import Prompt from '../components/Prompt'

export default class PromptContainer extends React.Component {

    constructor ( props ) {
        super( props )
        this.state = { username: '' }
    }

    handleSubmitUser ( e ) {
        e.preventDefault();
        var username = this.state.username;

        this.setState({
            username: ''
        });

        if (this.props.routeParams.playerOne) {
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username,
                }
            })
        } else {
            this.context.router.push('/playerTwo/' + this.state.username)
        }
    }

    handleUpdateUser ( event ) {
        this.setState({
            username: event.target.value
        });
    }

    render () {
        return (
            <Prompt
                onSubmitUser={ this.handleSubmitUser.bind( this ) }
                onUpdateUser={ this.handleUpdateUser.bind( this ) }
                header={ this.props.route.header }
                username={ this.state.username } />
        )
    }
}

PromptContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}
