import React, {Component} from 'react';
import TodoInput from "./TodoInput";
import TodoList from './TodoList/TodoList';
import './TodoBox.css';

class TodoBox extends Component {
    constructor(){
        super();

        this.state = {
            record: {},
        };
    }

    render() {
        return (
            <div className= "todo-box">
                <TodoInput addTodoEntry={this._addTodoEntry.bind(this)}/>
                <TodoList/>
            </div>
        );
    }

    _addTodoEntry(entry){
        console.log(entry)
    }
}

export default TodoBox;
