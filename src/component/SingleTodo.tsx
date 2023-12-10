import React, { useState } from "react";
import { Todo } from "../Model";
import { MdEdit, MdDelete, MdOutlineDone } from "react-icons/md";
import TodoList from "./TodoList";
import { classicNameResolver } from "typescript";

type Props = {
  todo: Todo;
  todos: Todo[];
  setState: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, setState, todos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setState(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setState(todos.filter((todo) => todo.id != id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setState(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  return (
    <form
      className="flex rounded-md p-5 mt-4 bg-white"
      onSubmit={(e) => handleEdit(e, todo.id)}
    >
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="outline-none"
        />
      ) : todo.isDone ? (
        <s>{todo.todo}</s>
      ) : (
        <span>{todo.todo}</span>
      )}

      <div className="flex px-2 py-1 ">
        <span
          className="px-2 cursor-pointer"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <MdEdit />
        </span>
        <span
          className="px-2 cursor-pointer"
          onClick={() => handleDelete(todo.id)}
        >
          <MdDelete />
        </span>
        <span
          className="px-2 cursor-pointer"
          onClick={() => handleDone(todo.id)}
        >
          <MdOutlineDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
