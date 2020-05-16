import React, { Component } from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap';
import axios from 'axios';

// import { Row, Col, Label, Button } from 'reactstrap';

export default class StudentSignup extends Component {
    constructor(state){
        super(state)
        this.state={
            join_code:'',
            full_name:'',
            username:'',
            password:'',
            confirm_password:'',
            email:'',
            error_join_code:'',
            error_full_name:'',
            error_username:'',
            error_password:'',
            error_confirm_password:'',
            error_email:'',
        }
    }
    
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    validateform(){
        let error_join_code="";
        let error_full_name="";
        let error_username="";
        let error_password="";
        let error_confirm_password="";
        let error_email="";

        if (!this.state.join_code) {
            error_join_code = "*Required";
        }
        if (!this.state.full_name) {
            error_full_name = "*Required";
        }
        if (!this.state.username) {
            error_username = "*Required";
        }
        if (!this.state.password) {
            error_password = "*Required";
        }
        if (!this.state.confirm_password) {
            error_confirm_password = "*Required";
        }
        if (this.state.password !== this.state.confirm_password) {
            error_confirm_password = "*Please type same password";
        }
        
        if (typeof this.state.email !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(this.state.email)) {
                error_email = "*Valid email-ID.Required";
            }
        }

        if(error_join_code || error_full_name  || error_username || error_password
             || error_confirm_password || error_email){
            this.setState({error_join_code,error_full_name,error_username,error_password,
                error_confirm_password,error_email});
            return false;
        }
        return true;
    }
    submitHandler = e => {
        e.preventDefault();
        const isValid=this.validateform();
        if(isValid){
            const uploaddata=new FormData();
            uploaddata.append('join_code',this.state.join_code);
            uploaddata.append('full_name',this.state.full_name);
            uploaddata.append('username',this.state.username);
            uploaddata.append('password',this.state.password);
            uploaddata.append('email',this.state.email);
            console.log(uploaddata);

            axios.post('http://localhost:8000/books/', uploaddata,)
                    .then(response => {
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    window.location.reload(false);

        }
    }
    render() {
        return (
            <div>    
                <form method="post" name="form" encType="multipart/form-data" onSubmit={this.submitHandler}>    
                    <h1 >Student Signup</h1>
                    <div style={{ color: "green" ,fontWeight: "bold"}}>Join Code*</div>
                    <input type="text" name="join_code" value={this.join_code} onChange={this.changeHandler} placeholder="Join code"/>
                    <div style={{ color: "red", fontSize: "14px" }} className="errorMsgtitle">{this.state.error_join_code}</div><br/>
                    <div style={{ color: "green" ,fontWeight: "bold"}}>Full Name*</div>
                    <input type="text" name="full_name" value={this.full_name} onChange={this.changeHandler} placeholder="Full name"/>
                    <div style={{ color: "red", fontSize: "14px" }} className="errorMsgtitle">{this.state.error_full_name}</div><br/>
                    <div style={{ color: "green" ,fontWeight: "bold"}}>Username*</div>
                    <input type="text" name="username" value={this.username} onChange={this.changeHandler} placeholder="Username"/>
                    <div style={{ color: "red", fontSize: "14px" }} className="errorMsgtitle">{this.state.error_username}</div><br/>
                    <div style={{ color: "green" ,fontWeight: "bold"}}>Password*</div>
                    <input type="password" name="password" value={this.password} onChange={this.changeHandler} placeholder="Password"/>
                    <div style={{ color: "red", fontSize: "14px" }} className="errorMsgtitle">{this.state.error_password}</div><br/>
                    <div style={{ color: "green" ,fontWeight: "bold"}}>Confirm Password*</div>
                    <input type="password" name="confirm_password" value={this.confirm_password} onChange={this.changeHandler} placeholder="Confirm password"/>
                    <div style={{ color: "red", fontSize: "14px" }} className="errorMsgtitle">{this.state.error_confirm_password}</div><br/>
                    <div style={{ color: "green" ,fontWeight: "bold"}}>Email*</div>
                    <input type="text" name="email" value={this.email} onChange={this.changeHandler} placeholder="Email"/>
                    <div style={{ color: "red", fontSize: "14px" }} className="errorMsgtitle">{this.state.error_email}</div><br/>
                    <button type="submit" style={{ fontWeight: "bold" ,backgroundColor: "#37BC9B"}}>Signup</button>
                </form>
                <Nav>
                    <NavItem>
                        <p>Already have an account</p>
                        <NavLink href="/Login"  className="signup" style={{ fontWeight: "bold" }}>Login</NavLink>
                    </NavItem>
                </Nav>     
            </div>
        )
    }
}
