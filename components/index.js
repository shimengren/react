import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import routers from './../router/router';
console.log('routes', routers)

export default class Index extends React.Component{
    render(){
        return (
            <div id="route">
                <Redirect to='/home' />
                {routers.map((item) => {return item.children.map((subItem, i) =>{return <Route key={i} path={subItem.path} exact component={subItem.component}/>})})}
            </div>
        )
    }
}