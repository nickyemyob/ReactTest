import React, {Component} from 'react';
import TodoEntry from "./TodoInput";
import TodoList from './TodoList/TodoList';
import './TodoBox.css';

class TodoBox extends Component {
    render() {
        return (
            <div className= "todo-box">
                <TodoEntry/>
                <TodoList/>
            </div>
        );
    }
}

export default TodoBox;
