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
            index: 0,
        },
        {
            text: 'Keep all state in a single tree',
            completed: true,
            index:1,
        }
    ],
    TodosShare:[
        {
            text: 'Consider using Redux',
            completed: true,
            index: 0,
        },
        {
            text: 'Keep all state in a single tree',
            completed: true,
            index: 1,
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
                              index: state.toDos.length,
                          }
                      ],
                      TodosShare:[
                          ...state.toDos,
                          {
                              text: action.text,
                              completed: false,
                              index: state.toDos.length,
                          }
                      ]

                  });
              case CHANGE_TODO:
                  const toggleTodos = state.toDos.map((item,index) =>{
                        if(index === action.index){
                            return {
                                text: item.text,
                                completed: !item.completed,
                                index: action.index,
                            }
                        }
                        return item;
                  });
                  console.log('toggleTodos',toggleTodos);
                  return Object.assign({},state,{
                      toDos:[
                          ...toggleTodos,
                      ]
                  })
              // 显示todo列表相关的action
              case FILTER_TODOS_SHARE:
                   if(action.text === 'SHOW_COMPLETED'){
                       const filteredTodos = state.toDos.filter(item => item.completed);
                       return Object.assign({},state,{
                           TodosShare:[
                               ...filteredTodos,
                           ]
                       })
                   }
                   if(action.text === 'SHOW_UNCOMPLETED'){
                       const filteredTodos = state.toDos.filter(item => !item.completed);
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


export default toDoApp;