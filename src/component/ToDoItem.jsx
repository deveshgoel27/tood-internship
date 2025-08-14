import React from "react";
import CompleteButton from "./CompleteButton";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import SaveButton from "./SaveButton";

const ToDoItem = ({
  todo,
  editId,
  editValue,
  onComplete,
  onEdit,
  onDelete,
  onSave,
  setEditValue
}) => {
  return (
    <div style={{ margin: "0.5rem" }}>
      {editId === todo.id ? (
        <>
          <input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSave(todo.id)}
          />
          <SaveButton onClick={() => onSave(todo.id)} />
        </>
      ) : (
        <>
          <span
            style={{
              marginRight: "2rem",
              textDecoration: todo.isCompleted ? "line-through" : "none"
            }}
          >
            {todo.value}
          </span>
          <CompleteButton onClick={() => onComplete(todo.id)} />
          <EditButton onClick={() => onEdit(todo.id, todo.value)} />
          <DeleteButton onClick={() => onDelete(todo.id)} />
        </>
      )}
    </div>
  );
};

export default ToDoItem;
