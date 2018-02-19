import React, {Component} from 'react';

class TodoInput extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this._handleSubmit.bind(this)}>
                    <input ref={(input) => this._entry=input}/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        );
    }

    _handleSubmit(event){
        event.preventDefault();

        let entry=this._entry
        this.props.addTodoEntry(entry.value);
    }
}

export default TodoInput;
