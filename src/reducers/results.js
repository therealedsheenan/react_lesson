const result = ( state, action ) => {
    switch ( action.type ) {
        case 'GET_RESULTS':
            return Object.assign({}, state, {
                results: action.result
            })
        default:
            return state
    }
}
