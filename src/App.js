import React, { useContext } from 'react'
import { Route, Switch } from 'react-router'
import {  AuthContext } from './components/auth-context'

import withLayout from './components/hoc/layout'
import AdminPage from './components/pages/admin-page'
import GalleryPage from './components/pages/gallery-page'
import HomePage from './components/pages/home-page'
import LoginPage from './components/pages/login-page'
import SignUpPage from './components/pages/sign-in-page'
import PrivateRoute from './components/private-route'

const App = () => {
    const value = useContext(AuthContext)
    return (    
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/gallery"  component={GalleryPage} />
                <PrivateRoute path="/admin" isAuth={value.isAuth} component={AdminPage} />
                <Route path="/login" render={props=>(
                    <LoginPage { ...props } setAuth={ value.setAuth } isAuth={value.isAuth}/>
                )
                } />
                <Route path="/sign-up" component={SignUpPage} />
            </Switch>
            
        )
}

export default withLayout()(App)
