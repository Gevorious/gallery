import React, {useState, createContext} from 'react'

export const AuthContext = createContext()

export const AuthProvider = props => {

    const [isAuth, setAuth] = useState(true)

    return (
        <AuthContext.Provider value={{isAuth, setAuth}}>
            {props.children}
        </AuthContext.Provider>
    )
}

