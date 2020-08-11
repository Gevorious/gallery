import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {BrowserRouter as Router} from 'react-router-dom'
import { AuthProvider } from './components/auth-context'

ReactDOM.render( 
    <Router>
       <AuthProvider>
          <App />
       </AuthProvider>
    </Router>,
    document.getElementById('root')
    );
