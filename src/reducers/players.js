<<<<<<< HEAD
const players = ( state = [], action ) => {
    switch( action.type ) {
        case 'ADD_PLAYER':
=======
// const player = ( state, action ) => {
//     switch ( action.type ) {
//         case 'ADD_PLAYER':
//             return {
//                 id: action.id,
//                 name: action.name
//             }
//         default:
//             return state
//     }
// }

const player = ( state, action ) => {
    if ( action.type == 'ADD_PLAYER' ) {
        return {
            id: action.id,
            name: action.name
        }
    }
    return state
}

const players = ( state = [], action ) => {
    switch( action.type ) {
        case 'ADD_PLAYER':
            // return [
            //     ...state,
            //     player( undefined, action )
            // ]
>>>>>>> master
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
