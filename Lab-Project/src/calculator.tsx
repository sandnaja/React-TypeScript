import React, { useState } from "react";

const calculator = () => {
  const [input, setInput] = useState("");

  const handleInput = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;
    setInput(input + value);
  };

  const calculate = (): void => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const clearInput = (): void => {
    setInput("");
  };

  return (
    <>
      <div>{input === "" ? "0" : input}</div>
      <button onClick={clearInput}>AC</button>
      <button onClick={handleInput} value="%">
        %
      </button>
      <button onClick={handleInput} value="/">
        ÷
      </button>
      <button onClick={handleInput} value="*">
        ×
      </button>
      <button onClick={handleInput} value="-">
        -
      </button>
      <button onClick={handleInput} value="+">
        +
      </button>
      <br />
      <button onClick={handleInput} value="7">
        7
      </button>
      <button onClick={handleInput} value="8">
        8
      </button>
      <button onClick={handleInput} value="9">
        9
      </button>
      <br />

      <button onClick={handleInput} value="4">
        4
      </button>
      <button onClick={handleInput} value="5">
        5
      </button>
      <button onClick={handleInput} value="6">
        6
      </button>
      <br />

      <button onClick={handleInput} value="1">
        1
      </button>
      <button onClick={handleInput} value="2">
        2
      </button>
      <button onClick={handleInput} value="3">
        3
      </button>
      <br />

      <button onClick={handleInput} value=".">
        .
      </button>
      <button onClick={handleInput} value="0">
        0
      </button>
      <button onClick={calculate}>=</button>
    </>
  );
};

export default calculator;
