// import { applyMiddleware } from 'redux'
// import { thunk } from 'redux-thunk'
// import reducer from './reducers/index'
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'

// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// const store = createStore(reducers, enhancer(applyMiddleware(thunk)));

const store = configureStore({
    reducer: {
        counter: counterSlice
    }
});
export default store