import React from "react";

const CompleteButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ marginRight: "0.5rem", background: "#4CAF50", color: "#fff", border: "none", padding: "0.3rem 0.6rem", borderRadius: "4px", cursor: "pointer" }}
    >
      ✅ Complete
    </button>
  );
};

export default CompleteButton;
