import PropTypes from 'prop-types';
import React from 'react';
import listStyle from './list.styl';
import CSSModules from 'react-css-modules';
@CSSModules(listStyle)

class ShowTodoList extends React.Component{
    render(){
        const listItems = this.props.Todos.map((todo,index) =>{
            return (
                <li key={index} styleName={todo.completed ? 'completed' : ''}>{todo.text}</li>
            )
        });
        return (
            <div>{listItems}</div>
        )
    }
}

ShowTodoList.propTypes={
    Todos:PropTypes.array.isRequired,
}
export default ShowTodoList;