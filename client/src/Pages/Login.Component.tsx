import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';


interface LoginComponentProps{
}
interface LoginComponentState{
    useremail:string;
    password:string;
}
export default class LoginComponent extends React.Component<LoginComponentProps,LoginComponentState>{
    
    constructor(props){
        super(props);

        this.state = {
            useremail:'',
            password:''
        }
    }

    login = () => {
        console.log(this.state);
        axios.post('/user/login',{email:this.state.useremail,password:this.state.password}).then(res => console.log(res))
    }

    handlePasswordFieldChange = (e) => {
        this.setState({
            password:e.target.value
        });
    }

    handleUseremailFieldChange = (e) => {
        this.setState({
            useremail:e.target.value
        });
    } 
    
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
                        value={this.state.useremail}
                        onChange={this.handleUseremailFieldChange}
                        className="nothing"
                        margin="normal"/>
                        
                        <TextField
                        required
                        id="standard-uncontrolled"
                        label="Password"
                        value={this.state.password}
                        onChange={this.handlePasswordFieldChange}
                        className="nothing"
                        type="password"
                        margin="normal"/>
                    <Button className="primary" onClick={() => this.login()}>Login</Button>
                </Card>
            </div>
        );
    }
} 