import React, {Component} from 'react';
import './TodoList.css'
import TodoRecord from "./TodoRecord";

class TodoList extends Component {


    render() {
        return (
            <div className="todo-list">
                <TodoRecord/>
            </div>
        );
    }


}

export default TodoList;