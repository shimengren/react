import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import routers from './../router/router';

 class Index extends React.Component{
    render(){
        return (
            <div id="route">
                <Redirect to='/home' />
                {routers.map((item) => {return item.children.map((subItem, i) =>{return <Route key={i} path={subItem.path} exact component={subItem.component}/>})})}
            </div>
        )
    }
}

export default withRouter(Index);