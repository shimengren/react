import PropTypes from 'prop-types';
import { findDOMNode } from 'react';
import React from 'react';
import {withRouter} from 'react-router-dom';
import CSSModules from 'react-css-modules';
import HeaderStyle from './header.styl';

@CSSModules(HeaderStyle)
class Header extends React.Component{
    constructor(props){
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.pushNextPage = this.pushNextPage.bind(this);
    }
    addTodo(){
      const inputDom = this.refs.input;
      const val = inputDom.value.trim();
      if(val.length !== 0){
          this.props.addToDoClick(val);
      }
      inputDom.value='';
    }
    pushNextPage(){
     this.props.history.replace('/detail');
    }
    render(){
        return (
            <div>
                <input type="text" ref="input" styleName='inputStyle'/>
                <button onClick={this.addTodo} styleName='buttonStyle'>增加</button>
                <button onClick={this.pushNextPage} styleName='buttonStyle'>进入新的页面</button>
            </div>
        )
    }
}
Header.propTypes={
    addToDoClick: PropTypes.func.isRequired,
}

export default withRouter(Header);