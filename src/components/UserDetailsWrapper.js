import React from 'react'

let PropTypes = React.PropTypes;

let UserDetailsWrapper = props => {
    return (
        <div className='col-sm-6'>
            <p className='lead'>{ props.header }</p>
            { props.children }
        </div>
    )
}

UserDetailsWrapper.PropTypes = {
    header: PropTypes.string.isRequired,
}

export default UserDetailsWrapper
