import React from 'react';
import './todo-list-item.css';

const TodoListItem = ( {label, important = false} ) => {
  const style = {
    color: important ? 'tomato' : 'black' 
  };
    return (
        <div>
        <span 
          className="todo-list-item" 
          style={style}>
          { label }
        </span>

        <button type="button" className="btn btn-outline-success btn-small">
          <i className="fa fa-exclametion" />
        </button>

        <button type="button" className="btn btn-outline-danger btn-small">
          <i className="fa fa-trash-o"/>
        </button>
        </div>
    );
  };

export default TodoListItem;