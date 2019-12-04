import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Login from '../Auth/';
import Dashboard from '../Dashboard';
import ProtectedRoute from './ProtectedRoutes';

class Routes extends React.PureComponent {
    render() {
        return (
            <Router>
                <Switch>
                    <ProtectedRoute path="/dashboard" component={Dashboard} />
                    <Route path="/" component={Login} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
