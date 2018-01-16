import React from 'react';
import PropTypes from 'prop-types';
import Header from './header.js';
import ShowTodoList from './list.js';
import Footer from './footer.js';

const toDoLists = [
    {
        text: 'complete react study',
        completed:true,
    },
    {
        text: 'complete house cleaning',
        completed: true,
    }
];
export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Todos:[
                ...toDoLists
            ],
            TodosShare:[
                ...toDoLists
            ],
            filterConditions: [
              'ShowAll',
              'ShowCompleted',
              'ShowUncompleted',
            ],
            currentFilterCondition: 'ShowAll',
        }
        this.addToDoClick = this.addToDoClick.bind(this);
        this.setFilter = this.setFilter.bind(this);
        this.changeTodo = this.changeTodo.bind(this);
    }
    changeTodo(todo ,index){
        this.setState((prevState) =>{
            console.log('todo',todo);
           const updatedTodos = prevState.Todos.map((item,index) =>{
               debugger;
               if(todo.index === index){
                   return Object.assign({},item,{completed: true});
               }
               return item;
           });
           return {
               Todos: [
                   ...updatedTodos,
               ],
           }
        });
        this.setFilter(this.state.currentFilterCondition);
    }
    addToDoClick(val){
        this.setState((prevState) =>{
            return {
                Todos: [...prevState.Todos, {
                    text: val,
                    completed: false,
                }],
                TodosShare: [
                    ...prevState.TodosShare, {
                        text: val,
                        completed: false,
                    }
                ]
            }
        });
       this.setFilter(this.state.currentFilterCondition);
    }
    setFilter(item){
       this.setState((prevState) =>{
           const toDos = prevState.Todos.map((item,index) => {
               return {
                   text: item.text,
                   completed:item.completed,
                   index:index,
               }
           });
           if(item === 'ShowAll'){
               return {
                   TodosShare:[
                       ...toDos
                   ],
                   currentFilterCondition: item,
               }
           }
           if(item === 'ShowCompleted'){
               const filterTodos = toDos.filter(item => item.completed === true);
               console.log('aa', filterTodos);
               return {
                   TodosShare:[
                       ...filterTodos
                   ],
                   currentFilterCondition: item,
               }
           }
           if(item === 'ShowUncompleted'){
               const filterTodos = toDos.filter(item => item.completed === false);
               console.log('filterTodos', filterTodos);
               return {
                   TodosShare:[
                       ...filterTodos
                   ],
                   currentFilterCondition: item,
               }
           }
       });
    }
    render(){
        return (
            <div>
                <Header addToDoClick={this.addToDoClick}/>
                <ShowTodoList Todos={this.state.TodosShare} changeTodo={this.changeTodo}/>
                <Footer filterConditions={this.state.filterConditions} setFilter={this.setFilter}/>
            </div>
        )
    }
}