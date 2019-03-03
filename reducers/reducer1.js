
const initialState ={
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
};

function reducer1(state = initialState, action){
          switch(action.type){
              // todos相关的action
              case 'ADD_TODO' :
                  return Object.assign({}, state, {
                      TodosShare:[
                          ...state.TodosShare,
                          {
                              text: action.text,
                              completed: true,
                          }
                      ]
                  });
              default:
                  return state;

          }
}


export default reducer1;