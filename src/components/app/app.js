import React, { Component } from 'react';
import './app.css';

import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import AddTodoItem from '../add-todo-item';

export default class App extends Component {

    maxId = 100;

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

    addItem = (text) => {
      const newItem ={
        label: text,
        important: false,
        id: this.maxId++
      }

      this.setState( ({todoData}) => {
        const newArr = [...todoData, newItem];
        return {
          todoData: newArr
        };
        console.log('item added', text);
      } );

    
    };

    onToggleImportant = (id) => {
      console.log('Toggle important', id);
    };

    onToggleDone = (id) => {
      console.log('toggle done', id);
    };

    render () {
        return (
            <div className="main_container">
                <AppHeader />
                <SearchPanel />
                <ItemStatusFilter/>
                <TodoList 
                todos={ this.state.todoData }
                onDeleted={ this.deleteItem }
                onToggleImportant={ this.onToggleImportant }
                onToggleDone={ this.onToggleDone }
                />
                <AddTodoItem onItemAdded={this.addItem}/>

            </div>
        );
       }
    }