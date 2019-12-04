import React, {Component} from "react";
import { connect } from 'react-redux';

import { getAllDashboard } from './actions';

function mapStateToProps (state) {
    return {
        dashboard: state.dashboard
    };
}
function mapDispatchToProps (dispatch) {
    return {
        getAllDashboard: () => {
            dispatch(getAllDashboard());
        }
    };
}

class Dashboard extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.getAllDashboard();
    }
    render(){
        const { dashboard } = this.props;
        return(
            <div className="container">
                <div className="gridSystem">
                    {
                        dashboard && dashboard.dashboard && dashboard.dashboard.data.map((item,index)=>{
                            return(
                                <div className="userCard" key={index}>
                                    <div className="content">
                                        <p>Name:{item.name}</p>
                                        <p>Age:{item.age}</p>
                                        <p>Gender:{item.gender}</p>
                                        <p>Email:{item.email}</p>
                                        <p>Mobile No:{item.phoneNo}</p>
                                        <p>Age:{item.age}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
