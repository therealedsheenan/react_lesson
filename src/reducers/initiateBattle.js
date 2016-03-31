const initiateBattle = ( state, action ) => {
    switch ( action.type ) {
        case 'INITIATE_BATTLE':
            return Object.assign({}, state, {
                players: action.players
            })

        default:
            return state
    }
}
