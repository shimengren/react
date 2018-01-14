import React from 'react';
import PropTypes from 'prop-types';
import Header from './header.js';
import List from './list.js';
import Footer from './footer.js';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Todos:[
                {
                    text: 'complete react study',
                    completed:false
                },
                {
                   text: 'complete house cleaning',
                    completed: false,
                }
            ],
            filterConditions: [
              'ShowAll',
              'ShowCompleted',
              'ShowUncompleted',
            ],
        }
    }
    render(){
        return (
            <Header/>,
            <List Todos={this.state.ToDos}/>,
            <Footer filterConditions={this.state.filterConditions
            }/>
        )
    }
}