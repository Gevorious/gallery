import React, { Component } from 'react'
import './login-page.css'

import fire from '../../../firebase'
import { Link, Redirect } from 'react-router-dom'

 class LoginPage extends Component {

    state = {
        email: "",
        password: "",
        isAuth: false
    }

        handleSubmit = (e) => {
        e.preventDefault()
       
        const { email, password } = this.state
        fire.auth().signInWithEmailAndPassword(email, password)
        .then((u)=> this.props.setAuth(true))
        .then(() => this.setState({isAuth: this.props.isAuth}))
        .catch((err)=>{
            console.log(err) 
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="LoginPage">
                <form className="login_form" onSubmit={ this.handleSubmit }>
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
                    <button className="btn btn-primary"> Login </button> 
                    or 
                    <Link to="/sign-up">Sign up</Link>
                </form>
                {this.state.isAuth ? <Redirect to="/admin" />: null}
            </div> 
        )
    }
}

export default LoginPage
