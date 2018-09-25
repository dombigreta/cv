import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';



export default class LoginComponent extends React.Component<any,any>{
    
    constructor(props){
        super(props);

        this.state = {
            useremail:'',
            password:'',
            submitted:false
        }
    }

   _handleChange = (e) => {
       const {name, value} = e.target;
       this.setState({[name]:value});
   }
    _handleOnSubmit = (e) =>{
        e.preventDefault();
        this.setState({submitted:true});
    }
    
    render(){
        const {useremail, password, submitted} = this.state;

        return(
            <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center">
                <form name="form" onSubmit={this._handleOnSubmit} className="col-4 flex-1 flex-column">
                        <Card className="d-flex flex-column p-4">
                            <Typography style={{ marginBottom: '0.5rem',fontSize: '1.9rem',color:'#f44336'}} >
                                    Login
                            </Typography>
                                <TextField
                                    
                                    id="standard-uncontrolled"
                                    label="Email"
                                    name="useremail"
                                    value={useremail}
                                    onChange={this._handleChange}
                                    error={submitted && !useremail}
                                    margin="normal"/>
                                
                                <TextField
                                    id="standard-uncontrolled"
                                    label="Password"
                                    name="password"
                                    value={password}
                                    onChange={this._handleChange}
                                    error={submitted && !password}
                                    type="password"
                                    margin="normal"/>
                            <Button type="submit" className="primary">Login</Button>
                        </Card>
                        <div className="mt-3 text-center">Don't you have an account? <Button color="secondary" href="#">Click here</Button> to create one!</div>
                </form>
            </div>
        );
    }
} 