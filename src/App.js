import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import 'bootstrap';
import LogIn from './User/components/Log-in/LogIn';
import ForgotenPassword from './User/components/Forgoten-password/ForgotenPassword';
import SignUp from './User/components/Sign-up/SignUp';
import Apointments from './User/components/Apointments/Apointments';





class App extends Component {
    render() {
        return (  
                <div>      
                   {/* <LogIn/>
                   <ForgotenPassword/>
                   <SignUp/> */}
                   <Apointments/>
                </div>
        );
    }
}

export default hot(module)(App)