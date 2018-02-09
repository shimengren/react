import React from 'react';
import {withRouter} from 'react-router-dom';

class Deatil extends React.Component{
    constructor(props){
        super(props)
        this.goBack = this.goBack.bind(this);
        this.pushForward = this.pushForward.bind(this);
        console.log('detailProps', this.props);
    }
    goBack(){
        this.props.history.goBack();
    }
    pushForward(){
        this.props.history.push('/classify');
    }
    render(){
        return (
            <div>
                <span onClick={this.goBack}>go back</span>
                <span onClick={this.pushForward}>this is the detail</span>
            </div>
        )
    }
}

export default withRouter(Deatil);