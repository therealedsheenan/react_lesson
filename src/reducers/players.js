const players = ( state = [], action ) => {
    switch( action.type ) {
        case 'ADD_PLAYER':
            return Object.assign({}, state, {
                player: [
                    ...state,
                    {
                        id: action.id,
                        name: action.name
                    }
                ]
            }
        )
        default:
            return state
    }
}

export default players
