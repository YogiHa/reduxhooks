export const createTodo = todo => {
    return (dispatch, getState) => {
        try {
            dispatch({
                type: 'TODO_CREATED',
                todo
            })
        } catch (err) {
            dispatch({
                type: 'ERROR',
                err
            })

        }
    }
}