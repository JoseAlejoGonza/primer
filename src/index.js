import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Checkout from './Checkout';
import SignIn from './sign-in/SignIn';
import SignUp from './sign-up/SignUp';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<SignIn />, document.getElementById('root'));
ReactDOM.render(<SignUp />, document.getElementById('root'));
//ReactDOM.render(<Checkout />, document.getElementById('root'));


/*ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));*/
