function addTodo(text){
    const action = {
        type: 'ADD_TODO',
        text
    };
    return aciton;
}
function toggleTodo(index){
    const action = {
        type: 'TOGGLE_TODO',
        index
    };
    return action;
}
function setVisibilityFilter(fiter){
    const action={
        type: 'SET_VISIBILITY_FILTER',
        filter
    };
    return action;
}

export default{
    addTodo,
    toggleTodo,
    setVisibilityFilter
}