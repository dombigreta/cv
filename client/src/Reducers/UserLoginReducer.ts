import { userActions } from '../Actions/user_login_actions';

const initialState = {
    userdata:null,
    isLoggedin:false
}

export const userReducer = function(state = initialState, action){
    switch(action.type){
        case userActions.GET_USER_DATA:{
           return Object.assign({}, state, {
               userdata:action.payload,
               isLoggedin:true
           });
        }
        default:{
            return state;
        }
    }

}
