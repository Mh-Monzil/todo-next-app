import React from "react";

const TodoList = ({todo, id}) => {
  console.log(todo);
  const {title, description, isCompleted} = todo
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id + 1}
      </th>
      <td className="px-6 py-4">{title}</td>
      <td className="px-6 py-4">{description}</td>
      <td className="px-6 py-4">{isCompleted ? "Completed" : "Pending"}</td>
      <td className="px-6 py-4 flex justify-center gap-2">
        <button className="py-2 px-4 bg-rose-500 text-white">Delete</button>
        <button className="py-2 px-4 bg-green-500 text-white">Done</button>
      </td>
    </tr>
  );
};

export default TodoList;
