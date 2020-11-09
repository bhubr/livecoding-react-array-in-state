import React, { Component } from 'react'
import './Tasks.css';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: 'new task',
    };
  }

  handleChange = (event) => {
    // cible de l'event "change" = input
    const inputField = event.target;
    // attribut "value" de l'input
    const newValue = inputField.value;
    this.setState({
      taskName: newValue,
    });
  }

  render() {
    const { taskName } = this.state;
    return (
      <div className="Tasks">
        <form>
          <h3>Add a new task</h3>

          <label htmlFor="taskName">
            Task name
            <input id="taskName" type="text" value={taskName} onChange={this.handleChange} />
          </label>

          <button type="submit">Add</button>
        </form>
        <ul>
          <li>Task 1</li>
          <li>Task 2</li>
          <li>Task 3</li>
        </ul>
      </div>
    )
  }
}

export default Tasks;
