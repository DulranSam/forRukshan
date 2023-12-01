import React from "react";

function SubComponent(props) {
  return (
    <div>
      <h1>
        hello there {props.test} the increased count is {props.getter}
      </h1>
      <button onClick={props.increase}>Increase this</button>
      <p>{props.getTodo}</p>
      <button onClick={props.increaseTodo}>Create Task</button>
      <button onClick={props.decreaseTodo}>Remove Task</button>
    </div>
  );
}

export default SubComponent;
