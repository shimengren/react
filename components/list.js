import PropTypes from 'prop-types';

function ShowTodoList(props){
    const listItems = props.Todos.map((todo) =>{
        return (
            <li>{todo.text}</li>
        )
    });
    return (
        <ul>{listItems}</ul>
    )
}

ShowTodoList.propTypes={
    Todos:PropTypes.array.isReuired,
}
export default ShowTodoList;