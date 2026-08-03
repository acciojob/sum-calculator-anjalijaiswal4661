import React, { useState, useEffect } from "react";

function SumCalculator() {
  const [input, setInput] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  // Add a number
  const handleAddNumber = () => {
    if (input === "") return;

    const number = parseInt(input, 10);

    if (!isNaN(number)) {
      setNumbers((prev) => [...prev, number]);
    }

    setInput("");
  };

  // Asynchronously calculate sum whenever numbers change
  useEffect(() => {
    const timer = setTimeout(() => {
      const total = numbers.reduce((acc, curr) => acc + curr, 0);
      setSum(total);
    }, 0);

    return () => clearTimeout(timer);
  }, [numbers]);

  return (
    <div>
      <h2>Sum Calculator</h2>

      <input
        type="number"
        value={input}
        placeholder="Enter a number"
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleAddNumber}>
        Add Number
      </button>

      <h3>Total Sum: {sum}</h3>

      <h4>Numbers:</h4>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default SumCalculator;
