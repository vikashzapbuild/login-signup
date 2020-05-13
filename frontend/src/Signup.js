import React, { Component } from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap';
// import './Signup.css';


export default class Signup extends Component {
    render() {
        return (
            <div>
                <div>
                <Nav>
                    <NavItem>
                        <NavLink href="/StudentSignup" className="studentsignup"><h1>I am a Student</h1></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/Signup"><h1>I am a Teacher</h1></NavLink>
                    </NavItem>
                </Nav>                
            </div>
            </div>
        )
    }
}
