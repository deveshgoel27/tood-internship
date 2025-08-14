import React from "react";

const DeleteButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ background: "#F44336", color: "#fff", border: "none", padding: "0.3rem 0.6rem", borderRadius: "4px", cursor: "pointer" }}
    >
      🗑️ Delete
    </button>
  );
};

export default DeleteButton;
