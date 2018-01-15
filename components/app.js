import React from 'react';
import PropTypes from 'prop-types';
import Header from './header.js';
import ShowTodoList from './list.js';
import Footer from './footer.js';

const toDoLists = [
    {
        text: 'complete react study',
        completed:true
    },
    {
        text: 'complete house cleaning',
        completed: true,
    }
]
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
        }
        this.addToDoClick = this.addToDoClick.bind(this);
        this.setFilter = this.setFilter.bind(this);
    }
    addToDoClick(val){
        this.setState((prevState) =>{
            console.log('newState', prevState.Todos);
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
    }
    setFilter(item){
       this.setState((prevState) =>{
           if(item === 'ShowAll'){
               return {
                   TodosShare:[
                       ...prevState.Todos
                   ]
               }
           }
           if(item === 'ShowCompleted'){
               const filterTodos = prevState.Todos.filter(item => item.completed === true);
               return {
                   TodosShare:[
                       ...prevState.Todos
                   ]
               }
           }
           if(item === 'ShowUncompleted'){
               const filterTodos = prevState.Todos.filter(item => item.completed === false);
               return {
                   TodosShare:[
                       ...prevState.Todos
                   ]
               }
           }
       });
    }
    render(){
        return (
            <div>
                <Header addToDoClick={this.addToDoClick}/>
                <ShowTodoList Todos={this.state.TodosShare}/>
                <Footer filterConditions={this.state.filterConditions} setFilter={this.setFilter}/>
            </div>
        )
    }
}