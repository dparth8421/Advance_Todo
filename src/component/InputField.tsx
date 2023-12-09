import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className="flex items-center w-11/12 relative " onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="rounded-2xl px-2 py-2 w-full text-lg shadow-md "
      />
      <button
        className="rounded-2xl bg-blue-600 mx-2 px-3 py-2 absolute right-0 shadow-md hover:bg-blue-500 transition duration-300 ease-in-out  "
        type="submit"
      >
        Go
      </button>
    </form>
  );
};

export default InputField;
