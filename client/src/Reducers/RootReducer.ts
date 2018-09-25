import { combineReducers } from 'redux';
import { userReducer } from './UserLoginReducer';

const rootReducer = combineReducers({
    userInfo:userReducer
});

export default rootReducer;