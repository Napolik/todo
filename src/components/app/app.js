import React, { Component } from 'react';
import './app.css';

import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

export default class App extends Component {
    state = {
        todoData: [
            { label: 'Drink Cofee', important: false, id: 1}, 
            { label: 'Another text', important: true, id: 2}, 
            { label: 'Tttt test text', important: false, id: 3} 
          ]
    };


    
    deleteItem = (id) => {
      this.setState( ({ todoData }) => {

        const idx = todoData.findIndex((el) => el.id === id);

        const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]; 

        return {
          todoData: newArray
        }
      })
      
    }

    render () {
        return (
            <div className="main_container">
                <AppHeader />
                <SearchPanel />
                <ItemStatusFilter/>
                <TodoList 
                todos={ this.state.todoData }
                onDeleted={ this.deleteItem }
                />
            </div>
        );
       }
    }