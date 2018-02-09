import React from 'react';
import Header from './header.js';
import ShowTodoList from './list.js';
import Footer from './footer.js';
import Tab from './../tab.js';
import {connect} from 'react-redux';
import * as action from './../../actions/actions.js';
import PropTypes from 'prop-types';

 class App extends React.Component {
     constructor(props){
         super(props);
         this.state={
             filterConditions: [
                 'SHOW_ALL',
                 'SHOW_COMPLETED',
                 'SHOW_UNCOMPLETED',
             ]
         }
         console.log('props', this.props);
         this.changeTodo = this.changeTodo.bind(this);
     }
     componentDidMount(){
         // getCompanyList(1).then((data) => {
         //     this.setState()
         //
         // });
         this.props.filterTodos('SHOW_ALL');
     }
     addTOdoClick(text){
         this.props.addTodo(text);
         this.props.filterTodos(this.props.filterCondition);
     }
     changeTodo(index){
         this.props.changeTodo(index);
         this.props.filterTodos(this.props.filterCondition);
     }
     filterTodos(item){
         this.props.filterTodos(item);
         this.props.setVisibilityFilter(item);
     }
    render(){
        const {TodosShare, toDos,filterCondition} = this.props;
        return (
            <div>
                <Header addToDoClick={text => this.addTOdoClick(text)}/>
                <ShowTodoList Todos={TodosShare} changeTodo={index => this.changeTodo(index)}/>
                <Footer filterConditions={this.state.filterConditions} setFilter={item => this.filterTodos(item)}/>
                <Tab />
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
export default connect(select, action)(App)