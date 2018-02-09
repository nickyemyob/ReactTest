import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from "./components/TodoBox/TodoBox";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>Todo List</h1>
        </header>
          <TodoForm/>
      </div>
    );
  }
}

export default App;
