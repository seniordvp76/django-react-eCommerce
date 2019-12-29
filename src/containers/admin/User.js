import React from 'react'
import { Sidebar, Segment, Image, Header } from 'semantic-ui-react'

const Users = () => (
    <Sidebar.Pusher>
        <Segment basic style={{ minHeight: '350px' }}>
            <Header as='h3'>User Management</Header>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
    </Sidebar.Pusher>
)

export default Users
