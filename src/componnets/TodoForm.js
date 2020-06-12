import React from "react";

export default (props) => {
  return (
    <div>
      <input
        type="text"
        value={props.name}
        onChange={(e) => props.onChangeName(e.target.value)}
      />
      <button onClick={() => props.addNewTodo("data dari child")}>
        Add todo
      </button>
    </div>
  );
};
