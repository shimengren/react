import PropTypes from 'prop-types';
import { findDOMNode } from 'react';
import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo(){
      const inputDom = this.refs.input;
      const val = inputDom.value.trim();
      this.props.addToDoClick(val);
      inputDom.value='';
    }
    render(){
        return (
            <div>
                <input type='text' ref="input"/>
                <button onClick={this.addTodo}>增加</button>
            </div>
        )
    }
}
Header.propTypes={
    addToDoClick: PropTypes.func.isRequired,
}

export default Header;