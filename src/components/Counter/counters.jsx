import React from "react";
import Counter from "./counter";

const Counters = ({ counters, onIncrement, onDecrement, onDelete }) => {
  return counters.map((counter) => (
    <Counter
      key={counter.id}
      counter={counter}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onDelete={onDelete}
    />
  ));
};

export default Counters;
