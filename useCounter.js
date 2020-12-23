import { useState } from "react";
// customHook para incrementar, decrementar y reset.
export const useCounter = (initialCounter = 10) => {
  const [counter, setCounter] = useState(initialCounter);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  
  const reset = () => {
    setCounter(initialCounter);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
