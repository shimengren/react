import React from 'react';
import Header from './header.js';
import ShowTodoList from './list.js';
import Footer from './footer.js';
import {connect} from 'react-redux';
import {addTodo,addTodoShare, filterTodos} from './../actions/actions.js';
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
     changeTodo(index){
         const filterCondition = this.context.store.state.filterCondition;
         this.context.store.dispatch(changeTodo(index));
         this.context.store.dispatch(filterTodos())
     }
    render(){
        const {dispatch, TodosShare, toDos} = this.props;
        console.log('TodosShare', TodosShare);
        return (
            <div>
                <Header addToDoClick={text => dispatch(addTodo(text))}/>
                <ShowTodoList Todos={TodosShare} changeTodo={(index) => this.changeTodo(index)}/>
                <Footer filterConditions={this.state.filterConditions} setFilter={item => dispatch(filterTodos(item))}/>
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