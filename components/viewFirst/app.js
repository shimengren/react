import React from 'react';
import Header from './header.js';
import ShowTodoList from './list.js';
import configuresStore from '../../configuresStore';
import {addTodo,addCountLength} from '../../actions/actions'
let store = configuresStore();

 class App extends React.Component {
     constructor(props){
         super(props);
         this.state={
             filterConditions: [
                 'SHOW_ALL',
                 'SHOW_COMPLETED',
                 'SHOW_UNCOMPLETED',
             ],
             TodosShare:store.getState().reducer1.TodosShare,
             toDosNumber: store.getState().reducer2.toDosNumber,
         }
     }
     componentDidMount(){
     }
     addTOdoClick(text){
         store.dispatch(addTodo(text));
         store.dispatch(addCountLength());
         this.setState({
            TodosShare: store.getState().reducer1.TodosShare,
            toDosNumber: store.getState().reducer2.toDosNumber,
         })
     }
    render(){
        const {TodosShare, toDosNumber} = this.state;
        return (
            <div>
              <Header addToDoClick={text => this.addTOdoClick(text)}/>
              <ShowTodoList Todos={TodosShare} />
              <span>还需做的家务数剩余：{toDosNumber}</span>
            </div>
        )
    }
}
export default App