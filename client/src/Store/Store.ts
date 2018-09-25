import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import RootReducer from '../Reducers/RootReducer';


const InitialState = {};

const middleWare = [thunk];


const store = createStore(
    RootReducer,
    InitialState, 
    compose(applyMiddleware(...middleWare))
);

export default store;