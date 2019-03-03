const initialState = {
   toDosNumber: 2,
};

function reducer2(state = initialState,action){
  switch (action.type){
   case 'COUNT_LENTH':
      return {
        ...state,
        toDosNumber:state.toDosNumber + 1
      }
      default:
      return state
  }
}

export default reducer2;