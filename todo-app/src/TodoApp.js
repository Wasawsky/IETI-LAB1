import React from 'react';
import {TodoList} from './TodoList';

export class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: this.props.states ,text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>TODO</h3>
          
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              What needs to be done?
            </label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              Add #{this.state.items.length + 1}
            </button>
          </form>
          <TodoList items={this.state.items} />
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
      
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return 0;
      }
      const newItem = {
            dueDate:new Date(),
            priority:this.state.items.length,
            text: this.state.text,
            id: Date.now()
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
    }
  }