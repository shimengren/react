import {
    ADD_TODO,
    FILTER_TODOS_SHARE,
    SET_VISIBILITY_FILTER,
    ADD_TODOS_SHARE,
    CHANGE_TODO
} from './../actionTypes';


function addTodo(text){
    const action = {
        type: 'ADD_TODO',
        text
    };
    return action;
}
function filterTodos(text){
    const action ={
        type: 'FILTER_TODOS_SHARE',
        text,
    }
    return action;
}
function setVisibilityFilter(filter){
    const action={
        type: 'SET_VISIBILITY_FILTER',
        filter
    };
    return action;
}
function addTodoShare(text){
    const action = {
        type: 'ADD_TODOS_SHARE',
        text,
    }
    return action;
}
function changeTodo(index){
    const action ={
        type: 'CHANGE_TODO',
        index
    }
    return action;
}

export {
    changeTodo,
    addTodo,
    filterTodos,
    addTodoShare,
    setVisibilityFilter
};