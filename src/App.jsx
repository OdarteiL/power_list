import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userInput = new FormData(e.target);
    console.log(userInput);
    setTasks(userInput.get("task"));
    console.log(userInput.get("task"));

    // if (!userInput.get("task") && userInput.get("task").length > 0) {
      setTasks([...tasks, userInput.get("task") ]);
    // }
  };

  // const addTask = () => {
  //   if (tasks) {
  //     setTasks([...tasks, tasks])
  //     setTasks('')
  //   }
  // }
  //

  return (
    <>
      <div className=" d-flex align-items-center justify-content-center flex-column">
        <form onSubmit={handleSubmit}>
          <h3>Todo App</h3>
          <div className="d-flex align-items-center mb-3">
            <div className="form-group mr-3 mb-0">
              <input
                name="task"
                type="text"
                className="form-control"
                id="task"
                placeholder="Enter a task here"
              />
            </div>
            <button type="submit" className="btn btn-primary mr-3">
              Save
            </button>
            <button type="button" className="btn btn-warning">
              Get Tasks
            </button>
          </div>
        </form>

        <div>
          <ul>
            { tasks.length > 0 ? (
              <>
                {tasks.map((task, idx) => {
                  return <li key={"task" + idx}>{task}</li>;
                })}
              </>
            ) : null}
            <hr />
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
