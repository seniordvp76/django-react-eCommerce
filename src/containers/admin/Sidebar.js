import { useBooleanKnob } from '@stardust-ui/docs-components'
import React from 'react'
import { createBrowserHistory } from "history";
import { Icon, Menu, Sidebar } from 'semantic-ui-react'
import { Link, Router, Route, withRouter } from "react-router-dom";
import Users from './User';
import Roles from './Role';
import AppContent from './Content';
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";
const history = createBrowserHistory();
const SidebarLayout = () => {
    const [visible, setVisible] = useBooleanKnob({ name: 'visible' })

    return (
        <Router history={history}>
            <Sidebar
                as={Menu}
                animation='slide out'
                inverted
                onHide={() => setVisible(true)}
                vertical
                visible={true}
                width='thin'
            >
                <Menu.Item as={Link} to="/dashboard">
                    <Icon name='home' />
                    Dashboard
                </Menu.Item>
                <Menu.Item as={Link} to="/dashboard/role">
                    <Icon name='shopping bag' />
                    Roles
                </Menu.Item>
                <Menu.Item as={Link} to="/dashboard/user">
                    <Icon name='user' />
                    Users
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='settings' />
                    Companies
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='setting' />
                    Employees
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='key' />
                    Change password
                </Menu.Item>
            </Sidebar>
            <Route path="/dashboard/user" component={Users} />
            <Route path="/dashboard/role" component={Roles} />
            <Route exact path="/dashboard" component={AppContent} />
        </Router>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};
export default withRouter(
    connect(
        mapDispatchToProps
    )(SidebarLayout)
);