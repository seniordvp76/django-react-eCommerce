import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Redirect } from "react-router";
import { Sidebar } from 'semantic-ui-react'
import SidebarLayout from './Sidebar'
import AppContent from './Content'

class Dashboard extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div style={{
                padding: "3em 0em"
            }}>
                <Sidebar.Pushable>
                    <SidebarLayout />
                </Sidebar.Pushable>
            </div >
        );
    }
}
const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        token: state.auth.token
    };
};

export default connect(mapStateToProps)(Dashboard);