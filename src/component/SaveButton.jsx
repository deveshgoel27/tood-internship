import React from "react";

const SaveButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ background: "#2196F3", color: "#fff", border: "none", padding: "0.3rem 0.6rem", borderRadius: "4px", cursor: "pointer" }}
    >
      💾 Save
    </button>
  );
};

export default SaveButton;
