let playerId = 0

export const AddPlayer = ( name ) => {
    return {
        type: 'ADD_PLAYER',
        id: playerId++,
        name
    }
}
