import React, { Component } from 'react'
import { Row, Col, Button } from 'reactstrap';
import './StudentAccount.css';


export default class StudentAccount extends Component {
    render() {
        return (
            <div className="studentaccount">
                <Row>
                    <Col>
                    <div>User@gmail.com</div><br/>
                    <Button href="/Login">Logout</Button>
                    </Col><br/>
                    <Col><Button href="/#">Notification</Button></Col><br/>
                    <Col><Button href="/#">Profile</Button></Col><br/>
                    <Col><Button href="/#">Files</Button></Col><br/>
                    <Button href="/#">ePortfile</Button>
                </Row>
            </div>
        )
    }
}
