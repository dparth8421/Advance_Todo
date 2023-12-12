import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../Model";
import { MdEdit, MdDelete, MdOutlineDone } from "react-icons/md";

import { Draggable } from "react-beautiful-dnd";

type Props = {
  todo: Todo;
  index: number;
  todos: Todo[];
  setState: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ index, todo, setState, todos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleDone = (id: number) => {
    setState(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setState(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setState(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <form
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="flex rounded-md p-5 mt-4 bg-white shadow-md hover:bg-gray-300 transition duration-300 ease-in-out "
          onSubmit={(e) => handleEdit(e, todo.id)}
        >
          {edit ? (
            <input
              ref={inputRef}
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="outline-none rounded-md"
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
      )}
    </Draggable>
  );
};

export default SingleTodo;
