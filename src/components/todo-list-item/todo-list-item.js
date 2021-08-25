import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

  render() {

    const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;
    //const { done, important } = this.state;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

      return (
          <div>
          <span 
            className={classNames} 
      //      style={style}
            onClick={ onToggleDone}>
            { label }  
          </span>
  
          <button type="button" className="btn btn-outline-success btn-small" onClick={onToggleImportant}>
            <i className="fa fa-exclametion" />
          </button>
  
          <button type="button" className="btn btn-outline-danger btn-small"
          onClick={onDeleted}>
            <i className="fa fa-trash-o"/>
          </button>
          </div>
      );
    };
}

/*
const TodoListItemFunc = ( {label, important = false} ) => {
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
*/