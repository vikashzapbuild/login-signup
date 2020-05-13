import React, { Component } from 'react'
import './Login.css';
import {Button,Nav, NavItem, NavLink} from 'reactstrap';
export default class Login extends Component {
    constructor(state){
        super(state)
        this.state={
            username:'',
            password:'',
        }
    }
    render() {
        return (
            <div >
                
                <h1>Login</h1>
                <div style={{ color: "green", fontSize: "14px" }} className="username"><h3 >Usename</h3></div>
                <input value={this.username} name="username"></input>
                <div style={{ color: "green", fontSize: "14px" }} className="password"><h3>Password</h3></div>
                <input value={this.password} name="password"></input><br/><br/>
                <Button type="submit" className="login">Login</Button>
                <div>
                <Nav>
                    <NavItem>
                        <NavLink href="/Signup"  className="signup">Signup</NavLink>
                    </NavItem>
                </Nav>           
                     
            </div>
            </div>
        )
    }
}
