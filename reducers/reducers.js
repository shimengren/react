import { combineReducers } from 'redux';
import {
    ADD_TODO,
    FILTER_TODOS_SHARE,
    SET_VISIBILITY_FILTER,
    ADD_TODOS_SHARE,
    CHANGE_TODO
} from './../actionTypes';
const initialState ={
    currentFilterCondition: 'SHOW_ALL',
    toDos:[
        {
            text: 'Consider using Redux',
            completed: true,
        },
        {
            text: 'Keep all state in a single tree',
            completed: true,
        }
    ],
    TodosShare:[
        {
            text: 'Consider using Redux',
            completed: true,
        },
        {
            text: 'Keep all state in a single tree',
            completed: true,
        }
    ],
    filterCondition: 'SHOW_ALL',
};

function toDoApp(state = initialState, action){
        const newArr = Array.from(state);
          switch(action.type){
              // todos相关的action
              case ADD_TODO :
                  return Object.assign({}, state, {
                      toDos:[
                          ...state.toDos,
                          {
                              text: action.text,
                              completed: false,
                          }
                      ],
                      TodosShare:[
                          ...state.toDos,
                          {
                              text: action.text,
                              completed: false,
                          }
                      ]

                  });
              // 显示todo列表相关的action
              case FILTER_TODOS_SHARE:
                   if(action.text === 'SHOW_COMPLETED'){
                       const filteredTodos = state.toDos.filter(item => item.completed);
                       debugger;
                       return Object.assign({},state,{
                           TodosShare:[
                               ...filteredTodos,
                           ]
                       })
                   }
                   if(action.text === 'SHOW_UNCOMPLETED'){
                       const filteredTodos = state.toDos.filter(item => !item.completed);
                       debugger;
                       return Object.assign({},state,{
                           TodosShare:[
                               ...filteredTodos,
                           ]
                       })
                   }
                   return Object.assign({}, state, {
                       TodosShare:[
                           ...state.toDos,
                       ]
                   });
              // 相关的显示条件
              case SET_VISIBILITY_FILTER:
                  return Object.assign({}, state, {
                      filterCondition: action.filter,
                  })
              default:
                  return state;

          }
}
function toDos(state = todos, action){
    switch(action.type){
        case CHANGE_TODO:
            const updatedTodos = this.state.Todos.map((item,index) =>{
                if(action.index === index){
                    return Object.assign({},item,{completed: true});
                }
                return item;
            });
            return Object.assign({}, state, {
                toDos: [
                    ...updatedTodos,
                ]
            });
        default:
            return state;
    }
}


export default toDoApp;