import React, { Component } from 'react'
import { Row, Col,  Button } from 'reactstrap';
// import './Loggedin.css';


export default class Loggedin extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <Button href="/StudentAccount" className="account">Account</Button>
                    </Col><br></br>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <Button href="#" className="account">Dashboard</Button>
                    </Col><br></br>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <Button href="#">Courses</Button>
                    </Col><br></br>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <Button href="#">Calender</Button>
                    </Col><br></br>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <Button href="#">Inbox</Button>
                    </Col><br></br>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <Button href="#">Help</Button>
                    </Col><br></br>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <Button href="/Login">Logout</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
