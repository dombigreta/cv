import * as React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getUserdata} from '../../Actions/user_login_actions';


interface _props{

}

class LoginComponent extends React.Component<any,any>{
    
    constructor(props){
        super(props);

        this.state = {
            useremail:'',
            password:'',
            submitted:false
        }

        console.log(this.props);
    }

   _handleChange = (e) => {
       const {name, value} = e.target;
       this.setState({[name]:value});
   }
    _handleOnSubmit = (e) => {
        e.preventDefault();
        this.setState({submitted:true});
        this.props.getUserData();
        
    }

    componentDidUpdate(){
        console.log(this.props);
    }
    
    render(){
        const {useremail, password, submitted} = this.state;
        console.log(this.props);
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

 const mapStateToProps = (state) => {
 
    return { userdata:state.userInfo.userdata, isLoggedin:state.userInfo.isLoggedin }};


const  mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getUserData: getUserdata},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent)