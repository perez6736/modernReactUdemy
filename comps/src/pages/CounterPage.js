import { useState, useEffect } from "react";
import Button from "../components/Button";
import useCounter from "../hooks/use-counter";

function CounterPage({ intialCount }) {
  const { count, increment } = useCounter(intialCount);
  return (
    <div>
      <h1>count is {count}</h1>
      <Button onClick={increment}>add to count</Button>
    </div>
  );
}

export default CounterPage;
