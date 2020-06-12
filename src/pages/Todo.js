import React, { useState, useEffect } from "react";
import TodoItem from "../componnets/TodoItem";
import FormTodo from "../componnets/TodoForm";

export default () => {
  const [todos, setTodos] = useState([{ id: 1, name: "makan" }]);
  const [todo, setTodo] = useState("data dari parent");

  useEffect(() => {
    console.log(" component did update");
  }, [todo, todos]);

  useEffect(() => {
    return () => {
      console.log("componnet will unmount");
    };
  }, []);

  const addTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      name: todo,
    };
    setTodos(todos.concat(newTodo));
    setTodo("");
  };

  return (
    <div>
      <h1>Todo Page</h1>
      <p>{todo}</p>
      <FormTodo
        name={todo}
        onChangeName={(name) => {
          setTodo(name);
        }}
        addNewTodo={(x) => addTodo(x)}
      />
      <br />
      {todos.map((todoData, i) => {
        return <TodoItem todo={todoData} key={todoData.id} />;
      })}
    </div>
  );
};
