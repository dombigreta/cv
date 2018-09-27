import { alertConstant } from '../Constants/constans';

interface messageObj{
    type:string;
    message:string;
}

function success(message:string):messageObj{
    return {type:alertConstant.ALERT_SUCCESS, message:message}
}

function warning(message:string):messageObj{
    return {type:alertConstant.ALERT_WARNING, message:message}
}

function error(message:string):messageObj{
    return {type:alertConstant.ALERT_ERROR, message:message}
}


