import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

  constructor() {
    super();

    this.state ={
      done: false,
      important : false
    };
    
    this.onLabelClick = () => {
      this.setState(({ done }) =>{
        return {
          done: !done
        };
      });
      
    };

    this.onMarkImportant = () =>  {
      this.setState(( { important } ) =>{
        return {
          important: !important
        };
      });
    };
  }

  render() {

    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    //const style = {
    //  color: important ? 'tomato' : 'black' 
    //};

      return (
          <div>
          <span 
            className={classNames} 
      //      style={style}
            onClick={ this.onLabelClick }>
            { label }  
          </span>
  
          <button type="button" className="btn btn-outline-success btn-small" onClick={this.onMarkImportant}>
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