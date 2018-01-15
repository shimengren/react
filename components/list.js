import PropTypes from 'prop-types';
import React from 'react';

function ShowTodoList(props){
    console.log('children', props.Todos);
    const listItems = props.Todos.map((todo,index) =>{
        return (
            <li key={index}>{todo.text}</li>
        )
    });
    return (
        <div>{listItems}</div>
    )
}

ShowTodoList.propTypes={
    Todos:PropTypes.array.isRequired,
}
export default ShowTodoList;