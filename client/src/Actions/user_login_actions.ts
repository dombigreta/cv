import axios from 'axios';
import { GET_USER_DATA } from './user_login_action_types';


export const logInUserAction = function(userdata){
    return{
        type:GET_USER_DATA,
        payload:userdata
    }
}

