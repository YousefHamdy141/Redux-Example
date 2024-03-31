import { DECREMENT, INCREMENT } from "./types"

export const incrementAction = async (dispatch) => {
    return dispatch({
        type: INCREMENT
    })
}

export const decrementAction = async (dispatch) => {
    return dispatch({
        type: DECREMENT
    })
}