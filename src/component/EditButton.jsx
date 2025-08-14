import React from "react";

const EditButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ marginRight: "0.5rem", background: "#FFC107", border: "none", padding: "0.3rem 0.6rem", borderRadius: "4px", cursor: "pointer" }}
    >
      ✏️ Edit
    </button>
  );
};

export default EditButton;
