import React from "react";

const StyledButton = ({ color = "blue", size = "medium", children = "Default Button" }) => {
  const sizes = {
    small: "20px 30px",
    medium: "25px 50px",
    large: "35px 70px bold",
  };

  const [fontSize, padding, fontWeight] = sizes[size].split(" ");

  return (
    <button style={{ 
      backgroundColor: color, 
      color: "white", 
      borderRadius: "50px", 
      padding, 
      fontSize, 
      fontWeight, 
      cursor: "pointer", 
      minWidth: "150px" 
    }}>
      {children}
    </button>
  );
};

export default StyledButton;
