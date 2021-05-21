import React from "react";
import Counter from "./counter";

const Counters = ({ counters }) => {
  return counters.map((counter) => (
    <Counter key={counter.id} counter={counter} />
  ));
};

export default Counters;
