import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/index'
import {Provider} from 'react-redux';
import configuresStore from './configuresStore';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import 'normalize.css';
import './global.css';
// import routers from './../router/router';
import App from "./components/viewFirst/app";


let store = configuresStore();


ReactDOM.render(
    <Provider store={store}>
       <BrowserRouter>
           <Switch>
              <Route path="/" component={Index}/>
           </Switch>
       </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);




