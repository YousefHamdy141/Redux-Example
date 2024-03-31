import { combineReducers } from 'redux'
import reducer from './reducer'
import userReducer from './userReducer'

export default combineReducers({
    counter: reducer,
    user: userReducer
})