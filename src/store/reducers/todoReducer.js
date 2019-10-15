export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'TODO_CREATED':
            state = [...state, action.todo]
            return state
        case 'ERROR':
            console.log('has been error, ', action.err)
            return state
        default:
            return state
    }
}