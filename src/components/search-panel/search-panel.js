import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
    state = {
        label: ''
    };

    
    onSearchChange = (e) => {
        console.log(e.target.value);
    };

    render() {
    return <input className="search-input"
    onChange={this.onSearchChange}
    placeholder="Search text"/>;
    }
  };