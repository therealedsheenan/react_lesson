import React from 'react'

export default class Main extends React.Component {
    render () {
        return (
            <div className='main-container'>
                {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
            </div>
        )
    }
}

export default Main
