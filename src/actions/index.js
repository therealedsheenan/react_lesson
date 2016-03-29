
export const addPlayer = ( text ) => {
    return {
        type: 'ADD_PLAYER',
        text
    }
}

export const IntiateBattle = ( users ) => {
    return {
        type: 'INITIATE_BATTLE',
        users
    }
}
