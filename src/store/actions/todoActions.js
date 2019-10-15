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

export const deleteTodo = index => {
    return (dispatch, getState) => {
        try {
            dispatch({
                type: 'TODO_DELETED',
                index
            })
        } catch (err) {
            dispatch({
                type: 'ERROR',
                err
            })

        }
    }
}

export const completeTodo = index => {
    return (dispatch, getState) => {
        try {
            dispatch({
                type: 'TODO_COMPLETED',
                index
            })
        } catch (err) {
            dispatch({
                type: 'ERROR',
                err
            })

        }
    }
}