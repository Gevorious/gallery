import React, { Component } from 'react'
import './sign-up-page.css'

import fire from '../../../firebase'
import { Link } from 'react-router-dom'

export class SignUpPage extends Component {

    state = {
        fullname: "",
        email: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signup = (e) => {
        e.preventDefault()
        const { email, password } = this.state
        fire.auth().createUserWithEmailAndPassword(email, password)
        .then((u)=>{
            console.log(u)
        })
        .catch((err)=>{
            console.log(err) 
        })
    }

    render() {
        return (
            <div className="SignUpPage">
                <form className="sign_up_form" onSubmit={ this.handleSubmit }>
                    <div className="form-group  form_input">
                        <label htmlFor="fullname">Full Name</label>    
                        <input 
                            className="form-control"
                            id="fullname"
                            name="fullname" 
                            type="text"
                            value={ this.state.fullname }
                            onChange={ this.handleChange } 
                            placeholder="Enter your full name" />
                    </div>
                    <div className="form-group  form_input">
                        <label htmlFor="email">E-mail</label>    
                        <input 
                            className="form-control"
                            id="email"
                            name="email" 
                            type="email"
                            value={ this.state.email }
                            onChange={ this.handleChange } 
                            placeholder="Enter your E-mail address" />
                    </div>
                    <div className="form-group form_input">
                        <label htmlFor="password">Password</label>    
                        <input 
                            className="form-control"
                            id="password"
                            name="password" 
                            type="password"
                            onChange={ this.handleChange } 
                            value={ this.state.password }
                            placeholder="Enter your password" />
                        </div>
                    <button 
                        className="btn btn-primary"
                        onClick={ this.signup }>
                        Sign Up
                    </button>
                    or 
                    <Link to="/login">Login</Link>
                </form>
            </div> 
        )
    }
}

export default SignUpPage
