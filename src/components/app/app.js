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
          ],
        term: '',
        filter: 'all' // active, done, all
    };

    createTodoItem(label) {
      if(label === '') {
        label = this.maxId;
      }
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
      } 
      );

    
    };

    toggleProperty(arr, id, propName) {
      const idx = arr.findIndex((el) => el.id === id);
      const oldItem = arr[idx];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};

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

    search(items, term) {
      if(term.length === 0) {
        return items;
      }

      return items.filter((item) => {
        return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
      });
    }

    onSearchChange = (term) => {
      this.setState({term});
    };

    
    onFilterChange = (filter) => {
      this.setState({filter});
    };


    filter(items, filter) {
      switch(filter) {
        case 'all': 
          return items;
        case 'active':
          return items.filter((item) => !item.done);
        case 'done':
          return items.filter((item) => item.done);
        default:
          return items;    
      }
    };

    render () {
      const { todoData, term, filter } = this.state;
      const visibleItems = this.filter(this.search(todoData, term), filter);
      const doneCount = todoData.filter( (el) => el.done).length;
      const todoCount = todoData.length - doneCount;
        return (
            <div className="main_container">
                <AppHeader toDo={todoCount} done={doneCount} />
                <SearchPanel onSearchChange={ this.onSearchChange } />
                <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
                <TodoList 
                todos={ visibleItems }
                onDeleted={ this.deleteItem }
                onToggleImportant={ this.onToggleImportant }
                onToggleDone={ this.onToggleDone }
                />
                <AddTodoItem onItemAdded={this.addItem}/>

            </div>
        );
       }
    }