import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Test from './Test/Test';
import Search from './Search/Search';
import Navbar from './Navbar/Navbar';




class App extends Component {
    render() {
        return (  
                <div>
                   <Navbar />  
                   <Search /> 
                </div>
        );
    }
}

export default hot(module)(App)