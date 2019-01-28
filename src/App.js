import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import 'bootstrap';
import Test from './User/components/Test';
import LogIn from './User/components/Log-in/LogIn';
import ForgotenPassword from './User/components/Forgoten-password/ForgotenPassword';
import SignUp from './User/components/Sign-up/SignUp';





class App extends Component {
    render() {
        return (  
                <div>
                   <Test/>
                   <LogIn/>
                   <ForgotenPassword/>
                   <SignUp/>
                </div>
        );
    }
}

export default hot(module)(App)