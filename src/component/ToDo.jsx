import React, { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const addToDo = () => {
    if (!task.trim()) return;
    setTodos([...todos, { value: task, isCompleted: false, id: Date.now() }]);
    setTask("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
  };

  const handleEdit = (id, value) => {
    setEditId(id);
    setEditValue(value);
  };

  const handleSave = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, value: editValue } : todo
    ));
    setEditId(null);
    setEditValue("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addToDo()}
      />
      <button onClick={addToDo}>➕ Add Task</button>

      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          editId={editId}
          editValue={editValue}
          onComplete={handleComplete}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onSave={handleSave}
          setEditValue={setEditValue}
        />
      ))}
    </div>
    </>
  );
};

export default ToDo;
