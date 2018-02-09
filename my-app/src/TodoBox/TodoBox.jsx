import React, {Component} from 'react';
import TodoEntry from "./TodoInput";
import TodoList from './TodoList/TodoList';

class TodoBox extends Component {
    render() {
        return (
            <div>
                <TodoEntry/>
                <TodoList/>
            </div>
        );
    }
}

export default TodoBox;
