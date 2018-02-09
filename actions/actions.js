import {
    ADD_TODO,
    FILTER_TODOS_SHARE,
    SET_VISIBILITY_FILTER,
    ADD_TODOS_SHARE,
    CHANGE_TODO
} from './../actionTypes';
import service from './../service/service';

const getCompanyList = (pageIndex) => service.getList(pageIndex).then((data) =>{
   return Promise.resolve(data);
})
const addTodo = (text) => (dispatch) => {
    dispatch({
        type: 'ADD_TODO',
        text,
    })
}
const filterTodos = (text) => (dispatch) => {
    dispatch({
        type: 'FILTER_TODOS_SHARE',
        text,
    })
}
const setVisibilityFilter = (filter) => (dispatch) => {
    dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter
    })
}
const addTodoShare = (text) => (dispatch) => {
    dispatch({
        type: 'ADD_TODOS_SHARE',
        text,
    })
}
const changeTodo = (index) => (dispatch) =>{
    dispatch({
        type: 'CHANGE_TODO',
        index
    })
}

export {
    getCompanyList,
    changeTodo,
    addTodo,
    filterTodos,
    addTodoShare,
    setVisibilityFilter
};