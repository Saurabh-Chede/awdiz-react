import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [id, setId] = useState(1);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteIndex, setdeleteIndex] = useState(null);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = () => {
    const updatedTask = { todo: task, id: id, isCompleted: false };
    setTodos([...todos, updatedTask]);
    setTask("");
    setId(id + 1);
  };

  const handleCheckbox = (index) => {
    setdeleteIndex(index);
    setConfirmDelete(true);
    const todo = todos.find((todoObj) => todoObj.id == index);
    setSelectedTodo(todo);
  };
  const handleDelete = (index) => {
    const indexOfTodo = todos.findIndex((todoObj) => todoObj.id == index);

    todos.splice(indexOfTodo, 1);

    setTodos([...todos]);
    setConfirmDelete(false);
  };
  console.log(todos, "todos");
  //   console.log(task, "task");
  return (
    <div>
      {confirmDelete ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1>Confirm Delete : {selectedTodo.todo}</h1>
          <div>
            <button onClick={() => handleDelete(deleteIndex)}>Yes</button>
            <button onClick={() => setConfirmDelete(false)}>No</button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Todo Application</h1>
          <input
            value={task}
            onChange={handleChange}
            type="text"
            placeholder="Type your task..."
          />
          <button onClick={handleSubmit}>Add Task</button>
          <br />
          <h2>Todo List :</h2>
          <div>
            {todos.map((todoObject) => (
              <div key={todoObject.id} style={{ display: "flex" }}>
                <h2>
                  {todoObject.id}. {todoObject.todo}
                </h2>
                <button onClick={() => handleCheckbox(todoObject.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;