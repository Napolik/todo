import React, { Component } from 'react';
import './add-todo-item.css';

export default class AddTodoItem extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        console.log(e.target.value);
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
    }

    render() {
        return ( 
            <form className="add-todo-item d-flex" onSubmit={this.onSubmit}>
                
                <input type="text" className="form-control"
                onChange={this.onLabelChange}
                placeholder="Enter text" />
            <button className="btn btn-outline-secondary"
            
            >Add</button>
           </form>
        );
    }
  };
