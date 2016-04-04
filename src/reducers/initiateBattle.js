const initiateBattle = ( state, action ) => {
    switch ( action.type ) {
        case 'INITIATE_BATTLE':
            return Object.assign({}, state, {
                players: action.players
            })
<<<<<<< HEAD

=======
            // let newState = { id: action.id, name: action.name }
            // return
>>>>>>> master
        default:
            return state
    }
}
