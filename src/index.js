import React from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader'
import App from './components/App'
import './styles/index.scss';

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<AppWithHot name="Jane" />, mountNode);