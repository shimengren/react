// 此文件为按照自己对源码理解和网上查阅资料自己实现的redux
function createStore(reducer,initialState){
  var currentState = initialState;
  var currentReducer = reducer;
  const InitAction = {
    type: 'redux/Init',
  }; // 初始化state里面的数据的
  var isDispatching = false;
  var listeners =[];
  function getState(){
      return currentState;
  }
  function replaceReducer(newReducer){
    currentReducer = newReducer;
    dispatch(InitAction);
  }
  function dispatch(action){
    if(action.type ==='undefined'){
      throw new Error('action type 不能为空');
    }
    if(isDispatching){
      throw new Error ('当前状态正在分发');
    }
    try{
      isDispatching = true;
      currentState = reducer(currentState,action);
      listeners.forEach(function(listener){
        listener();
      });
    } finally{
       isDispatching = false;
    }
  }
  function subscribe(fn){ // 订阅store发生变化时的执行函数
    listeners.push(fn);
    return function(){
      listeners = listeners.filter(listener => listener !== fn);
    }
  }
  dispatch(InitAction);
  return {
    getState,
    replaceReducer,
    dispatch,
    subscribe,
  }
}
function combineReducers(reducers){
  // 返回reducers最标准的格式
  return function (state,action) {
   let newState = {};
   let hasChanged = false;
   for (let i in reducers){
     const preState = state && state[i];
     const aftState = reducers[i](preState,action);
     if(preState !== aftState){
       hasChanged = true;
     }
     newState[i] = aftState;
   }
   return hasChanged  ? newState : state;
  }
}
// redux中间件的标准格式
const logger = store => next => action => {
  console.log('prev state',store.getState())
  console.log('dispatch',action);
  let result = next(action);
  console.log('next state',store.getState());
  return result;
}
function applyMiddleware(){ // 传入中间件
   var array = Array.prototype.slice.call(arguments); // applymiddleware函数传入的参数
   var middleWare = array;
   return function createStoreWithMiddleWare(createStore){
    return function(){
      const store = createStore(...arguments); // 匿名函数传入的参数
      const dispatch = store.dispatch;
      var newMiddleWare = middleWare.map(item =>{
        return item(store);
      });
      // 使用数组的reduce方法使得[a,b,c]的函数列表从左到右执行，并且上一个函数的返回结果为下一个函数的参数
      var newDispatch = newMiddleWare.reduce((a,b) =>{return function(dispatch){ return a(b(dispatch))}}); // 这句话是关键，需要仔细研究
      store.dispatch = newDispatch(dispatch); // 改造后的dispatch操作会经过每个中间件的处理，并且通过next(action)方式将最初的dispatch带到最后一个中间件并且执行
      return store;
    }
   }
}
// redux-thunk相关
const  reduxThunk = store => next => action =>{
  const {dispatch,getState} = store;
  if(typeof action ==='function'){
    action(dispatch,getState)
  } else {
    console.log('reduxThunk')
    return next(action)
  }
};


export {
  createStore,
  combineReducers,
  applyMiddleware,
  reduxThunk,
  logger
}