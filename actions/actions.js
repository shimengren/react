
import service from './../service/service';

const getCompanyList = (pageIndex) => service.getList(pageIndex).then((data) =>{
   return Promise.resolve(data);
})
const addCountLength = () => (dispatch,getState) =>{
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve('aaaa');
        },3000)
    }).then(() =>{
        dispatch({
            type:'COUNT_LENTH',
        });
    })
}
const addTodo = (text) => (dispatch,getState) => {
    dispatch({
        type:'ADD_TODO',
        text
    })
}

export {
    addTodo,
    addCountLength
};