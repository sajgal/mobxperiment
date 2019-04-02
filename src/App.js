import React, { Component } from 'react';
import Store from './AppStore';
import EmployeeList from './EmployeeList';
import EnvCheck from './EnvCheck';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EmployeeList employees={Store.employees} />
        <EnvCheck />
      </div>
    );
  }
}

export default App;
