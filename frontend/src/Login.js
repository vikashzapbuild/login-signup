import React, { Component } from 'react'
import './Login.css';
import {Button,Nav, NavItem, NavLink} from 'reactstrap';
import {Redirect } from "react-router-dom";
import axios from 'axios';


export default class Login extends Component {
    constructor(state){
        super(state)
        this.state={
            username:'',
            password:'',
            error_username:'',
            error_password:'',
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    validateform(){
        let error_username="";
        let error_password="";
         
        if (!this.state.username ) {
            error_username="*Required";
           
        }

        if (!this.state.password) {
            error_password = "*Required";
        }
        if(error_username || error_password){
            this.setState({error_username,error_password});
            return false;
        }
        return true;
    }
    submituserLoginForm = e =>{
        e.preventDefault();
        const isValid=this.validateform();
        if(isValid){
            const uploadData=new FormData();
            uploadData.append('username',this.state.username);
            uploadData.append('password',this.state.password)
            console.log(uploadData);
            e.preventDefault();
        console.log("LOgin data", this.state)
        axios.post("http://127.0.0.1:8000/auth-jwt/", uploadData)
            .then(response => {
                console.log(response.data.token)
                localStorage.setItem("token",response.data.token)
                this.setState({loggedIn:true})
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
    render() {
        // const { username, password } = this.state
        if(this.state.loggedIn){
            return <Redirect to='/Loggedin'/>
          }
        return (
            <div className="border">
                <form method="post" onSubmit={this.submituserLoginForm}>
                <h1>Login</h1>
                <div style={{ color: "green", fontWeight: "bold" }} className="username">username</div>
                <input value={this.username} name="username" onChange={this.handleChange} placeholder="Enter you username"></input>
                <div style={{ color: "red", fontSize: "14px" }} className="errorMsgtitle">{this.state.error_username}</div><br></br>
                <div style={{ color: "green", fontWeight: "bold" }} className="password">Password</div>
                <input type="password" value={this.password} name="password" onChange={this.handleChange} placeholder="Enter your password"></input>
                <div style={{ color: "red", fontSize: "14px" }} className="errorMsgtitle">{this.state.error_password}</div><br/>
                <Button type="submit" style={{ fontWeight: "bold" ,backgroundColor: "#37BC9B"}} className="login">Login</Button>
                </form>
                <div>
                <Nav>
                    <NavItem>
                        <p>Don't have an account</p>
                        <NavLink href="/Signup"  className="signup" style={{ fontWeight: "bold" }}>Signup</NavLink>
                    </NavItem>
                </Nav>           
                     
            </div>
            </div>
        )
    }
}
