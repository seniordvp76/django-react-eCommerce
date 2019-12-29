import React from 'react'
import { Sidebar, Segment, Image, Header } from 'semantic-ui-react'

const AppContent = () => (
    <Sidebar.Pusher style={{ minHeight: '350px' }}>
        <Segment basic>
            <Header as='h3'>Application Content</Header>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
    </Sidebar.Pusher>
)

export default AppContent
