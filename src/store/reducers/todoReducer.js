export const todoReducer = (state = [], action) => {
    let newState = [...state]
    switch (action.type) {
        case 'TODO_CREATED':
            state = [...state, { content: action.todo, isCompleted: false }]
            return state
        case 'TODO_DELETED':
            newState.splice(action.index, 1)
            return newState
        case 'TODO_COMPLETED':
            newState[action.index].isCompleted = !state[action.index].isCompleted;
            return newState
        case 'ERROR':
            console.log('has been error, ', action.err)
            return state
        default:
            return state
    }
}