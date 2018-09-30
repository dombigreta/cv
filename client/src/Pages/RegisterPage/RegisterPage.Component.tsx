import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import './registerpage.css'
import FormControlLabel from '@material-ui/core/FormControlLabel';

class RegisterPageComponent extends React.Component<any,any>{


    render(){

        let inputFieldStyle= {
            border:'1px solid #ced4da',
            borderRadius:'.30rem',
            textAlign:'center'
        } as any
        return (
           <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center flex-column">
                <div className="flex-1 d-flex align-items-center justify-content-center flex-column">
                <Typography style={{ marginBottom: '0.5rem',fontSize: '1.9rem',color:'#f44336'}} >
                                        Create a new account
                </Typography>
                    <div className="d-flex col-7">
                    <div className="m-4 col-7 d-flex flex-column">
                    <TextField      id="standard-uncontrolled"
                                    label="last name"
                                    name="username"
                                    value=""
                                    style={inputFieldStyle}
                                    margin="normal"/>
                    <TextField      id="standard-uncontrolled"
                                    label="first name"
                                    name="username"
                                    value=""
                                    style={inputFieldStyle}
                                    margin="normal"/>
                    <TextField      id="standard-uncontrolled"
                                    label="email"
                                    name="username"
                                    value=""
                                    style={inputFieldStyle}
                                    margin="normal"/>
                    <TextField      id="standard-uncontrolled"
                                    label="password"
                                    name="username"
                                    value=""
                                    style={inputFieldStyle}
                                    margin="normal"/>
                    <TextField      id="standard-uncontrolled"
                                    label="confirm password"
                                    name="username"
                                    value=""
                                    style={inputFieldStyle}
                                    margin="normal"/>
                    </div>
                    <div className="m-4 col-5 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at diam sed lectus bibendum vulputate id a sapien. Suspendisse venenatis vitae urna vitae efficitur. Curabitur sagittis euismod mi in pretium. Sed ut tellus in elit ullamcorper placerat. Quisque lacinia mi nisl, sed feugiat diam dignissim sit amet. 
                    Suspendisse vitae ultricies ex. Quisque posuere sit amet massa ut elementum. Praesent vel elementum turpis. Vestibulum rutrum ornare risus, quis bibendum risus. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at diam sed lectus bibendum vulputate id a sapien. Suspendisse venenatis vitae urna vitae efficitur. Curabitur sagittis euismod mi in pretium. Sed ut tellus in elit ullamcorper placerat. Quisque lacinia mi nisl, sed feugiat diam dignissim sit amet. 
                    Suspendisse vitae ultricies ex. Quisque posuere sit amet massa ut elementum. Praesent vel elementum turpis. Vestibulum rutrum ornare risus, quis bibendum risus. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at diam sed lectus bibendum vulputate id a sapien. Suspendisse venenatis vitae urna vitae efficitur. Curabitur sagittis euismod mi in pretium. Sed ut tellus in elit ullamcorper placerat. Quisque lacinia mi nisl, sed feugiat diam dignissim sit amet. 
                    Suspendisse vitae ultricies ex. Quisque posuere sit amet massa ut elementum. Praesent vel elementum turpis. Vestibulum rutrum ornare risus, quis bibendum risus. 
                    </div>
                    </div>
                    </div>
           </div> 
        )
    }
}

export default RegisterPageComponent;