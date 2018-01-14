import {combineReducers} from 'react-redux';
const initialState ={
    visibilityFilter: 'SHOW_ALL',
    toDos:[
        {
            text: 'Consider using Redux',
            completed: true,
        },
        {
            text: 'Keep all state in a single tree',
            completed: false
        }
    ]
};

const toDoApp = combineReducers({
    setVisibilityFilter,
    toDos
});
function toDos(state=[], action){
          switch(action.type){
              case ADD_TODO:
                  return Object.assign({},state, {
                      toDos:[
                          ...state.toDos,
                          {
                              text: action.text,
                              completed:false,
                          }
                      ]
                  });
              case TOGGLE_TODO:
                  return Object.assign({}, state, {
                      toDos: state.toDos.map((item ,index)=>{
                          if(index === action.index){
                              return Object.assign({}, item, {completed: !item.completed})
                          }
                          return item;
                      })
                  });
              default:
                  return state;

          }
}
function setVisibilityFilter(state='SHOW_ALL', action){
       switch(action.type){
           case SET_VISIBILITY_FILTER :
               return action.filter;
           default:
               return state;
       }
}