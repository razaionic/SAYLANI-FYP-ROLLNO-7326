import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main';
import MenuApp from './MenuApp';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route,Switch} from 'react-router-dom';



ReactDOM.render(<BrowserRouter>
    <Main />
    </BrowserRouter>, document.getElementById('root'));
// ReactDOM.render(<MenuApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
