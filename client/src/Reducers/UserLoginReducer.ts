import { GET_USER_DATA } from '../Actions/user_login_action_types';
const initialState = {
    userdata:null,
    isLoggedin:false
}

export const userReducer = function(state = initialState, action){
    switch(action.type){
        case GET_USER_DATA:{
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
