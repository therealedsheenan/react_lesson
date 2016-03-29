import React from 'react'

let MainContainer = props => {
    return (
        <div className="jumbotron col-sm-12 text-center">
          { props.children }
        </div>
    )
}

export default MainContainer
