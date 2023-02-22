import React from "react";

const Props = (props) => {
  return (
    <div>
      <h1>
        The employee name is {props.name} and role in company is {props.jobrole}
      </h1>
      {props.children}
    </div>
  );
};

export default Props;
