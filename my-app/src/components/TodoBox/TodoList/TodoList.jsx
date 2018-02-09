import React, {Component} from 'react';
import './TodoList.css'

class TodoList extends Component {
    render() {
        return (
            <div className="todo-list">
                <label>Get milk</label>
                <button>Remove</button>
            </div>
        );
    }
}

export default TodoList;