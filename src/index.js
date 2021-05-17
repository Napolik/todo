import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import ItemStatusFilter from './components/item-status-filte';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';


const App = () => {

  const todoData =[
    { label: 'Drink Cofee', important: false, id: 1}, 
    { label: 'Another text', important: true, id: 2}, 
    { label: 'Tttt test text', important: false, id: 3} 
  ]
  return (
    <div>
      <AppHeader />

      <SearchPanel />
      <ItemStatusFilter/>
      <TodoList todos={ todoData }/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));