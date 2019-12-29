import React from 'react'
import { Route, Redirect } from 'react-router'
import { connect } from 'react-redux'
import * as reducer from '../store/reducers/auth'
const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (

    <Route {...rest} render={props => (
        isAuthenticated ? (
            <Component {...props} />
        ) : (
                <Redirect to={{
                    pathname: '/',
                    state: { from: props.location }
                }} />
            )
    )} />
)

const mapStateToProps = state => {
    return {
        isAuthenticated: window.localStorage.token != null
    };
};
export default connect(mapStateToProps, null)(PrivateRoute);