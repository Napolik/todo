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
          this.createTodoItem('Drink Cofee'),
          this.createTodoItem('Another text'),
          this.createTodoItem('tesst text')
          ]
    };

    createTodoItem(label) {
      return {
        label,
        important: false,
        done: false,
        id: this.maxId++
      }
    }
    
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
      const newItem = this.createTodoItem(text);

      this.setState( ({todoData}) => {
        const newArr = [...todoData, newItem];
        return {
          todoData: newArr
        };
        console.log('item added', text);
      } );

    
    };

    toggleProperty(arr, id, propName) {
      const idx = arr.findIndex((el) => el.id === id);
      const oldItem = arr[idx];
      const newItem = {... oldItem, [propName]: !oldItem[propName]};

      return [...arr.slice(0, idx),
              newItem,
              ...arr.slice(idx + 1)];

    }

    onToggleImportant = (id) => {
      this.setState( ({todoData}) => {
        return {
          todoData: this.toggleProperty(todoData, id, 'important')
        }
      });
    };

    onToggleDone = (id) => {
      this.setState( ({todoData}) => {
        return {
          todoData: this.toggleProperty(todoData, id, 'done')
        }
      });
      console.log('toggle done', id);
    };

    render () {
      const { todoData } = this.state;
      const doneCount = todoData.filter( (el) => el.done).length;
      const todoCount = todoData.length - doneCount;
        return (
            <div className="main_container">
                <AppHeader toDo={todoCount} done={doneCount} />
                <SearchPanel />
                <ItemStatusFilter/>
                <TodoList 
                todos={ todoData }
                onDeleted={ this.deleteItem }
                onToggleImportant={ this.onToggleImportant }
                onToggleDone={ this.onToggleDone }
                />
                <AddTodoItem onItemAdded={this.addItem}/>

            </div>
        );
       }
    }