import React from "react";
import { Todo } from "../Model";
import { MdEdit, MdDelete, MdOutlineDone } from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setState: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, setState, todos }: Props) => {
  return (
    <form className="flex rounded-md p-5 mt-4 bg-white">
      <span>{todo.todo}</span>
      <div className="flex px-2 py-1 ">
        <span className="px-2">
          <MdEdit />
        </span>
        <span className="px-2">
          <MdDelete />
        </span>
        <span className="px-2">
          <MdOutlineDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
