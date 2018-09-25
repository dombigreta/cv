import axios from 'axios';
export const userActions = {
    GET_USER_DATA:'GET_USER_DATA'
}

export function getUserdata(){
   return function(dispatch){
    return axios.post('user/login',{email:'dombigreta96@gmail.com', password:'valamiasd'}).
   then(res => dispatch(getUserDatanonasync(res.data)));
}}

function getUserDatanonasync(userdata){
    return{
        type:userActions.GET_USER_DATA,
        payload:userdata
    }
}

