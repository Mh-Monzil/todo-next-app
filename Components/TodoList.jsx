import React from "react";

const TodoList = ({todo, id, deleteTodo, completeTodo}) => {
  console.log(todo);
  const {_id, title, description, isCompleted, createdAt} = todo
  return (
    <tr className=" border-b border-b-gray-600 text-white">
      <th
        scope="row"
        className="px-6 py-4 font-medium whitespace-nowrap "
      >
        {id + 1}
      </th>
      <td>{new Date(createdAt).toLocaleDateString()}</td>
      <td className={`px-6 py-4 ${isCompleted ? "line-through" : ""}`}>{title}</td>
      <td className={`px-6 py-4 ${isCompleted ? "line-through" : ""}`}>{description}</td>
      <td className={`px-6 py-4 ${isCompleted ? "text-green-400" : "text-yellow-400"}`}>{isCompleted ? "Completed" : "Pending"}</td>
      <td className="px-6 py-4 flex justify-center gap-2 font-semibold">
        <button onClick={() => deleteTodo(_id)} className="py-2 px-4 bg-rose-500 text-white">Delete</button>
        {!isCompleted && <button onClick={() => completeTodo(_id)} className="py-2 px-4 bg-green-500 text-white">Done</button>}
      </td>
      
    </tr>
  );
};

export default TodoList;
