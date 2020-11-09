import React, { Component } from 'react'
import './Tasks.css';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: 'new task',
      tasks: [], // stocker les taches sous forme de strings ["Task 1", "Task 2"]
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

  handleSubmit = (event) => {
    // empecher de sortir de la page
    event.preventDefault();
    // recuperer la valeur de l'input depuis le state
    const { taskName } = this.state;
    // stocker cette nouvelle tache
  }

  render() {
    const { taskName, tasks } = this.state;
    return (
      <div className="Tasks">
        <form onSubmit={this.handleSubmit}>
          <h3>Add a new task</h3>

          <label htmlFor="taskName">
            Task name
            <input id="taskName" type="text" value={taskName} onChange={this.handleChange} />
          </label>

          <button type="submit">Add</button>
        </form>
        <div>
          <h3>Tasks list</h3>
          <ul>
            {
              tasks.map((singleTask) => (
                <li key={singleTask}>{singleTask}</li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Tasks;
