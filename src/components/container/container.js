import React from 'react';
import './container.css';

import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

const MainContainer = () => {
    const todoData =[
        { label: 'Drink Cofee', important: false, id: 1}, 
        { label: 'Another text', important: true, id: 2}, 
        { label: 'Tttt test text', important: false, id: 3} 
      ]
    return (
        <div className="main_container">
            <AppHeader />
            <SearchPanel />
            <ItemStatusFilter/>
            <TodoList 
            todos={ todoData }
            onDeleted={ (id) => console.log('del', id)}
            />
        </div>
    )
   };

export default MainContainer;