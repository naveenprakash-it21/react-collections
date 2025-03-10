import React from "react";
import StyledButton from "./StyleButton"; 

const Parent = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "30px",background:"black" }}>
    <StyledButton color="purple" size="small">Small Purple Button</StyledButton>
    <StyledButton color="red" size="medium">Medium Red Button</StyledButton>
    <StyledButton color="green" size="large">Large Green Button</StyledButton>
  </div>
);

export default Parent;
