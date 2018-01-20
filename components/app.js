import React from 'react';
import Header from './header.js';
import ShowTodoList from './list.js';
import Footer from './footer.js';
import {connect} from 'react-redux';
import {addTodo,addTodoShare, filterTodos,setVisibilityFilter,changeTodo} from './../actions/actions.js';
import PropTypes from 'prop-types';

 class App extends React.Component {
     static contextTypes = {
         store: PropTypes.object,
     };
     constructor(props){
         super(props);
         this.state={
             filterConditions: [
                 'SHOW_ALL',
                 'SHOW_COMPLETED',
                 'SHOW_UNCOMPLETED',
             ]
         }
         this.changeTodo = this.changeTodo.bind(this);
     }
     componentDidMount(){
         this.context.store.dispatch(filterTodos('SHOW_ALL'));
     }
     addTOdoClick(text){
         this.context.store.dispatch(addTodo(text));
         this.context.store.dispatch(filterTodos(this.props.filterCondition));
     }
     changeTodo(index){
         this.context.store.dispatch(changeTodo(index));
         this.context.store.dispatch(filterTodos(this.props.filterCondition));
     }
     filterTodos(item){
         this.context.store.dispatch(filterTodos(item));
         this.context.store.dispatch(setVisibilityFilter(item));
     }
    render(){
        const {dispatch, TodosShare, toDos,filterCondition} = this.props;
        console.log('todosshare', this.props.TodosShare);
        return (
            <div>
                <Header addToDoClick={text => this.addTOdoClick(text)}/>
                <ShowTodoList Todos={TodosShare} changeTodo={index => this.changeTodo(index)}/>
                <Footer filterConditions={this.state.filterConditions} setFilter={item => this.filterTodos(item)}/>
            </div>
        )
    }
}
function select(state){
    return{
        TodosShare: state.TodosShare,
        toDos: state.toDos,
        filterCondition: state.filterCondition,
    }
}
export default connect(select)(App)