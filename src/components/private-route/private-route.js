import React from 'react'
import { Route, Redirect } from 'react-router'

const PrivateRoute = ({component: Component, isAuth: isAuthenticated, ...rest}) => {
    
    return (
        <Route {...rest} render={(props)=>(
            isAuthenticated
            ? <Component {...props} /> 
            : <Redirect to="/login"/>
            )}
        />
    )
}

export default PrivateRoute
