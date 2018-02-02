import React from 'react';
import Header from './header.js';
import ShowTodoList from './list.js';
import Footer from './footer.js';
import Tab from './../tab.js';
import {connect} from 'react-redux';
import {addTodo,addTodoShare, filterTodos,setVisibilityFilter,changeTodo} from './../../actions/actions.js';
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
         console.log('this', this.props);
         this.props.dispatch(filterTodos('SHOW_ALL'));
     }
     addTOdoClick(text){
         this.props.dispatch(addTodo(text));
         this.props.dispatch(filterTodos(this.props.filterCondition));
     }
     changeTodo(index){
         this.props.dispatch(changeTodo(index));
         this.props.dispatch(filterTodos(this.props.filterCondition));
     }
     filterTodos(item){
         this.props.dispatch(filterTodos(item));
         this.props.dispatch(setVisibilityFilter(item));
     }
    render(){
        const {dispatch, TodosShare, toDos,filterCondition} = this.props;
        return (
            <div>
                <Header addToDoClick={text => this.addTOdoClick(text)}/>
                <ShowTodoList Todos={TodosShare} changeTodo={index => this.changeTodo(index)}/>
                <Footer filterConditions={this.state.filterConditions} setFilter={item => this.filterTodos(item)}/>
                <Tab/>
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