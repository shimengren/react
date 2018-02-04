import React from 'react';
import FirstPart from './firstPart';
import SecondPart from './secondPart';
import ThirdPart from './thirdPart';
import {Route, Link, NavLink} from 'react-router-dom';
const objStyle ={
    textDecoration:'none',
    color:'black',
    marginRight: '20px'
}

class Test extends React.Component{
    render(){
        return (
            <div>
                <div>显示内容</div>
                <NavLink to="/FirstPart" style={objStyle}>FirstPart</NavLink>
                <NavLink to="/SecondPart" style={objStyle}>SecondPart</NavLink>
                <NavLink to="/ThirdPart" style={objStyle}>ThirdPart</NavLink>
                <div>
                    <Route path="/FirstPart" component={FirstPart}></Route>
                    <Route path="/SecondPart" component={SecondPart}></Route>
                    <Route path="/ThirdPart" component={ThirdPart}></Route>
                </div>
            </div>
        )
    }
}

export default Test