import PropTypes from 'prop-types';
import React from 'react';

const completedStyle = {
    textDecoration: 'line-through',
}
class ShowTodoList extends React.Component{
    getStyle(todo){
        if(todo.completed){
            return completedStyle;
        }
    }
    changeStyle(todo,index){
        this.props.changeTodo(todo, index);
    }
    render(){
        const listItems = this.props.Todos.map((todo,index) =>{
            return (
                <li key={index} style={this.getStyle(todo)} onClick={this.changeStyle.bind(this, todo,index)}>{todo.text}</li>
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