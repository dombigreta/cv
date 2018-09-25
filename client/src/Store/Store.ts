import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import getUsers from '../Reducers/RootReducer';

const loggerMiddleWare = createLogger();
const store = createStore(getUsers, applyMiddleware(thunkMiddleware,loggerMiddleWare));

export default store;