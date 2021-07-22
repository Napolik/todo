import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

  constructor() {
    super();
    this.onLabelClick = () => {
      console.log(`Done: ${ this.props.label }`);
    };
  }

  render() {

    const {label, important = false} = this.props;

    const style = {
      color: important ? 'tomato' : 'black' 
    };
      return (
          <div>
          <span 
            className="todo-list-item" 
            style={style}
            onClick={ this.onLabelClick }>
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