<<<<<<< HEAD
const results = ( state, action ) => {
=======
const result = ( state, action ) => {
>>>>>>> master
    switch ( action.type ) {
        case 'GET_RESULTS':
            return Object.assign({}, state, {
                results: action.result
            })
        default:
            return state
    }
}
