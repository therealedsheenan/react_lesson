let playerId = 0

export const AddPlayer = ( name ) => {
    return {
        type: 'ADD_PLAYER',
        id: playerId++,
        name
<<<<<<< HEAD
=======
    }
}

export const IntiateBattle = ( players ) => {
    return {
        type: 'INITIATE_BATTLE',
        players
    }
}

export const GetResults = ( result ) => {
    return {
        type: 'GET_RESULTS',
        result
>>>>>>> master
    }
}
