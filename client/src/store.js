import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
const initialState = {};

const middleware = [thunk];
const customCompose = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const store = createStore(
    rootReducer, 
    initialState, 
    customCompose(applyMiddleware(...middleware))
    );


export default store;
