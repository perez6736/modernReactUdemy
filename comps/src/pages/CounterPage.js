import { useState, useEffect } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

function CounterPage({ intialCount }) {
  const [count, setCount] = useState(intialCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">count is {count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>increment</Button>
        <Button onClick={decrement}>decrement</Button>
      </div>
      <form>
        <label>Add a lot</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
