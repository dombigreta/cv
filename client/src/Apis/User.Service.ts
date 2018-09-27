import axios from 'axios';
import { logInUserAction } from '../Actions/user_login_actions';

export const logInUser = (username:string, password:string) => {
    return function(dispatch){
        return axios.post('/user/login',{useremail:username, password:password})
        .then(res => dispatch(logInUserAction(res.data)))
        .catch(err => console.log(err));
    }
}