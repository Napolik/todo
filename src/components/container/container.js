import React, { Component } from 'react';
import './container.css';

import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

export default class MainContainer extends Component {
    state ={
        todoData: [
            { label: 'Drink Cofee', important: false, id: 1}, 
            { label: 'Another text', important: true, id: 2}, 
            { label: 'Tttt test text', important: false, id: 3} 
          ]
    }

    render () {
        return (
            <div className="main_container">
                <AppHeader />
                <SearchPanel />
                <ItemStatusFilter/>
                <TodoList 
                todos={ this.state.todoData }
                onDeleted={ (id) => console.log('del', id)}
                />
            </div>
        )
       };
    }