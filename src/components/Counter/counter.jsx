import React from "react";

const getBadgeColor = (counter) => {
  let badgeClasses = "badge m-2 badge-";
  badgeClasses += counter.value === 0 ? "warning" : "primary";
  return badgeClasses;
};

const Counter = ({ counter }) => {
  let badgeClasses = getBadgeColor(counter);
  return (
    <div>
      <span className={badgeClasses}>{counter.value}</span>
      <button className="btn btn-primary m-2">+</button>
      <button className="btn btn-primary m-2">-</button>
      <button className="btn btn-danger m-2">X</button>
    </div>
  );
};

export default Counter;
