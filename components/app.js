import React from 'react';
import PropTypes from 'prop-types';
import Header from './header.js';
import ShowTodoList from './list.js';
import Footer from './footer.js';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Todos:[
                {
                    text: 'complete react study',
                    completed:true
                },
                {
                   text: 'complete house cleaning',
                    completed: true,
                }
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
            }
        });
    }
    setFilter(item){
       this.setState((prevState) =>{
           const filterTodos = prevState.Todos.filter(item => item.completed === item);
           if(item === 'ShowAll'){
               return prevState;
           } else {
               return {
                   Todos:[
                       ...filterTodos
                   ]
               }
           }
       });
    }
    render(){
        return (
            <div>
                <Header addToDoClick={this.addToDoClick}/>
                <ShowTodoList Todos={this.state.Todos}/>
                <Footer filterConditions={this.state.filterConditions} setFilter={this.setFilter}/>
            </div>
        )
    }
}