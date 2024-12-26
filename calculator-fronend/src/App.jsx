import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Import the CSS file

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "num1") {
      setNum1(value);
    } else if (name === "num2") {
      setNum2(value);
    }
  };

  const handleCalculate = async (operation) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/${operation}/${num1}/${num2}`
      );
      setResult(response.data);
    } catch (error) {
      setResult("Error: " + error.message);
    }
  };

  return (
    <div className="calculator">
      {" "}
      {/* Apply the 'calculator' class */}
      <h1 className="calculator-title">Simple Calculator</h1>
      <div className="input-container">
        <input
          type="text"
          name="num1"
          placeholder="Enter number 1"
          value={num1}
          onChange={handleInputChange}
          className="calculator-input"
        />
        <input
          type="text"
          name="num2"
          placeholder="Enter number 2"
          value={num2}
          onChange={handleInputChange}
          className="calculator-input"
        />
      </div>
      <div className="button-container">
        <button onClick={() => handleCalculate("add")} className="operator">
          +
        </button>
        <button
          onClick={() => handleCalculate("subtract")}
          className="operator"
        >
          -
        </button>
        <button
          onClick={() => handleCalculate("multiply")}
          className="operator"
        >
          *
        </button>
        <button onClick={() => handleCalculate("divide")} className="operator">
          /
        </button>
      </div>
      <p className="result">Result: {result}</p>
    </div>
  );
}

export default App;
