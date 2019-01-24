import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Test from './Test/Test';

class App extends Component {
    render() {
        return (
            <div>
                <Test/>
            </div>
        );
    }
}

export default hot(module)(App)