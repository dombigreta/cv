import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default class LoginComponent extends React.Component{
    render(){
        return(
        <div className="col-4 mx-auto mt-5">
                <Card className="d-flex flex-column p-4">
                    <Typography style={{ marginBottom: '0.5rem',fontSize: '1.9rem',color:'#f44336'}} >
                            Login
                    </Typography>
                        <TextField
                        required
                        id="standard-uncontrolled"
                        label="Email"
                        defaultValue="foo"
                        className="nothing"
                        margin="normal"/>
                        
                        <TextField
                        required
                        id="standard-uncontrolled"
                        label="Password"
                        defaultValue="dufhkjg"
                        className="nothing"
                        type="password"
                        margin="normal"/>
                    <Button className="primary">Login</Button>
                </Card>
            </div>
        );
    }
} 