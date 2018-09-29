import axios from 'axios';
import { logInUserAction } from '../Actions/user_login_actions';

export const logInUser = (username:string, password:string) => {
    return function(dispatch){
        axios.post('/user/login', {username:username, password:password})
        .then(res => dispatch(res.data))
        .catch(err =>  {throw err});
    }
}