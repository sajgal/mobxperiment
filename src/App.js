import React, { Component } from 'react';
import Store from './AppStore';
import EmployeeList from './EmployeeList';
import './App.css';

class App extends Component {
  render() {
    console.log('store', Store.employees);

    return (
      <div className="App">
        <EmployeeList employees={Store.employees} />
      </div>
    );
  }
}

export default App;
