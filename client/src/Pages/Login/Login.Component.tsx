import * as React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import { logInUser } from '../../Apis/User.Service';


class LoginComponent extends React.Component<any,any>{
    
    constructor(props){
        super(props);

        this.state = {
            username:'',
            password:'',
            submitted:false
        }
    }

   _handleChange = (e) => {
       const {name, value} = e.target;
       this.setState({[name]:value});
   }
    _handleOnSubmit = (e) => {
        e.preventDefault();
        const {username, password} = this.state;
        this.setState({submitted:true});
        this.props.logInUser(username, password);
    }

    render(){
        const {username, password, submitted} = this.state;

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
                                    name="username"
                                    value={username}
                                    onChange={this._handleChange}
                                    error={submitted && !username}
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

 const mapStateToProps = (state) => ({userdata:state.userInfo.userdata, isLoggedin:state.userInfo.isLoggedin });


const  mapDispatchToProps = (dispatch) =>  bindActionCreators({logInUser: logInUser},dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent)