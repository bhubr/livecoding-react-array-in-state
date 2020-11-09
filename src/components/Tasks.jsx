import React, { Component } from 'react';
import './Tasks.css';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
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
  };

  handleSubmit = (event) => {
    // empecher de sortir de la page
    event.preventDefault();
    // recuperer la valeur de l'input depuis le state
    const { taskName, tasks } = this.state;
    // stocker cette nouvelle tache dans un nouveau tableau
    // this.state.tasks.push(taskName); // BAD (mute le tableau)
    const newTasks = [...tasks, taskName];
    // remplacer l'ancien tableau par le nouveau dans le state
    this.setState({
      tasks: newTasks,
      taskName: '',
    });
  };

  handleDelete = (taskToDelete) => {
    console.log(taskToDelete)
    // tasks contient ['task 1', 'task 2']
    // j'ai clique sur la 2eme => singleTask vaut 'task 2'

    const { tasks } = this.state;
    const newTasks = tasks.filter((task) => task !== taskToDelete);
    this.setState({
      tasks: newTasks,
    });
  }

  render() {
    const { taskName, tasks } = this.state;
    return (
      <div className="Tasks">
        <form onSubmit={this.handleSubmit}>
          <h3>Add a new task</h3>

          <label htmlFor="taskName">
            Task name
            <input
              id="taskName"
              type="text"
              value={taskName}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Add</button>
        </form>
        <div>
          <h3>Tasks list</h3>
          <ul className="TasksList">
            {tasks.map((singleTask) => (
              <li className="TaskItem" key={singleTask}>
                <span className="TaskItem-name">{singleTask}</span>
                <button type="button" className="TaskItem-trash" onClick={() => this.handleDelete(singleTask)}>
                  <span className="icon-bin" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Tasks;
