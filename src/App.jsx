import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function CardWrapper({ children }) {
  return (
    <div
      style={{
        border: "5px solid white",
        padding: "10px",
        margin: "10px",
      }}
    >
      {children}
    </div>
  );
}
function App() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <CardWrapper>
        Parent Component 1<CardWrapper>Child Component 1</CardWrapper>
        <CardWrapper>Child Component 2</CardWrapper>
        <CardWrapper>Child Component 3</CardWrapper>
      </CardWrapper>
      <CardWrapper>
        Parent Component 1<CardWrapper>Child Component 1</CardWrapper>
        <CardWrapper>Child Component 2</CardWrapper>
        <CardWrapper>Child Component 3</CardWrapper>
      </CardWrapper>
    </div>
  );
}

export default App;
