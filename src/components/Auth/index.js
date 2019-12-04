import React, {Component} from "react";
import {
    login
} from './actions';
import {connect} from "react-redux";
import {
    isUserLoggedIn
} from '../../utils';


function mapStateToProps (state) {
    console.log(state)
    return {
        user: state.login
    };
}

function mapDispatchToProps (dispatch) {
    return {
        login: (body) => {
            dispatch(login(body));
        }
    };
}

class Login extends Component {
    constructor() {
        super();
    }
    componentWillMount(){
        if(isUserLoggedIn()){
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps){
        const {user:{login:{pending, failed, error}}} = nextProps;
        const {user:{login:{pending: oldPending}}} = this.props;
        if(!pending && pending !== oldPending){
            if(failed){
                // let myColor = { background: '#df382c', text: "#FFFFFF" };
                // notify.show(nextProps.user.login.error, "custom", 6000, myColor);
            }else {
                this.props.history.push('/dashboard');
            }
        }
    }

    submit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target)
        let data = {};
        for (var [key, value] of formData.entries()) {
            data[key] = value;
        }
        console.log(data);
        this.props.login(data);
    }

    render(){
        const pending = this.props.user.login.pending;
        return (
          <div className="wrapper fadeInDown">
              <div id="formContent">
                  <form className="formStyles" onSubmit={this.submit}>
                  <div className="fadeIn first">
                      <h5>Login Form</h5>
                  </div>
                      <input type="text" className="fadeIn second" name="email" placeholder="Enter email id" />
                      <input type="password" className="fadeIn third" name="password" placeholder="Enter password" />
                      <input type="submit" disabled={pending} className="btn btn-info fadeIn fourth" value={`${pending ? 'invalid credentials...' : 'Login'}`} />
                  </form>
              </div>
          </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);