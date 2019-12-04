import React from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';
import {
    connect
} from 'react-redux';
import { isUserLoggedIn } from '../../../utils';
import { logOut } from '../../Auth/actions/authLogin';


const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => {
            dispatch(logOut());
        }
    };
};

class ProtectedRoute extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const {component: Component, ...rest} = this.props;
        return (
            <Route {...rest} render={props => (
                isUserLoggedIn() ?
                <div>
                    <input type="button" onClick={()=>{
                        this.props.logOut();
                        props.history.push('/');
                    }} className="btn btn-danger" value="logout" />
                    <Component {...props} />
                </div> :
                <Redirect to='/' />
            )}/>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
